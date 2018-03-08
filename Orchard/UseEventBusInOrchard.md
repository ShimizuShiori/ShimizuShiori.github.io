# 在Orchard中使用事件总线

为了降低Module与Module之间的耦合程度，Orchard采用了事件总线的方式来进行Module间的通讯。
事件总线的相关代码位于 *Orchard.Framework/Events* 中。

## 使用方法

既然是事件，就意味着有两个角色

* 事件发起方
* 事件处理方

在Orchard中，事件处理方是通过 *IEventHandler* 实现的，而事件发起方是通过 *IEventBus* 实现的

### 事件发起方

既然要通过 *IEventBus* 来发起事件，那么我们首先要注入该实例

```csharp
using Orchard.Events;

public class someClass
{
    //用于发起事件的对象
    private readonly IEventBus eventBus;

    //通过构造函数进行注入
    public someClass(IEventBus eventBus)
    {
        this.eventBus = eventBus;
    }
}
```

然后在某个需要发起事件的位置编写以下代码
```csharp
public void Create(Object someObject)
{
    //具体的创建方法，在示例中忽略
    this.ConcreteCreate(someObject);

    //事件参数，用一个键值对表示
    Dictionary<String, Object> eventData = new Dictionary<String, Object>();
    eventData["newId"] = someObject.Id; //假定一些用于发起事件的参数

    //Notify的第一个参数其实是由两个部分组成
    //点左侧的是处理器名称
    //点右侧的是方法名称
    this.eventBus.Notify("ISomeObjectEventHandler.Created", eventData);
}
```

### 事件处理方（*IEventHandler*）

上面我们已经完成了所有对事件的发起，就算没有任何事件处理器，上面的代码也可以正常运行，因此我们可以在某些位置预留事件发起点，在有将来有必要时，直接编写一个 *IEventHandler* 就行了。

*IEventHandler* 由两个部分组成，一个是 *interface* ,一个是 *class*

首先我们看 *interface* 部分

```csharp
using Orchard.Events;

public interface ISomeObjectCreatedEventHandler : IEventHandler
{
    void Created(int newId);
}
```
> 编写 *interface* 时需要注意以下几条规则
> 1. *interface* 的名称要与 *IEventBus.Notify* 中的 **处理器名称** 完全一致（区分大小写）
> 2. *interface* 中的方法名称要与 *IEventBus.Notify* 中的 **方法名称** 完全一致（区分大小写）
> 3. 方法中的参数列表名称、类型要与 *IEventBus.Notify* 中的 **eventData** 中的键值对一一对应（区分大小写）
> 4. 继承于 *IEventHandler*


接着，我们可以编写 *class* 部分
```csharp
public class SomeObjectCreatedEventHandler : ISomeObjectCreatedEventHandler
{
    public void Created(int newId)
    {
        Console.WriteLine($"一个新的SomeObject被创建，它的ID是{newId}");
    }
}
```
> 编写 *class* 部分的时候，没有需要遵守的规则

---

至此，一个事件的发起、接收已经完全开发完成。

### Q & A

1. 若在A模块中发起事件，在B模块中处理，并且以A模块中的类型作为参数时，是否需要在B中引用A的程序集?

> 不需要，在 *IEventHandler* 的参数列表中，使用 **dynamic** 作为类型即可，优点是不需要引用A，缺点是开发时没有智能提示并且当A中的类型修改时，B中的类型无法同步修改

## 尚未确定的功能

* [ ] 多个位置同时监听一个事件
* [ ] *IEventHandler* 中的方法存在 **返回值** 时，是否能在 *IEventBus* 中获得

## 参考资料

1. [How Orchard Workds](http://docs.orchardproject.net/en/latest/Documentation/How-Orchard-works/#event-bus)