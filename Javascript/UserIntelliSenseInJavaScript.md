# 在JavaScript开发中使用精确智能提示

## 背景

开发JavaScript或NodeJS有一种痛就没提示，或者是乱提示。

解释型语言，是JavaScript的优点。但它也带了不便 : **没有一个精准的编译过程，无法在开发阶段得知每一个变量的类型和成员** 。

现在，我们可以借TypeScript的一角，来完成对JavaScript项目的定义以及准确的智能提示

## 准备工作

### 环境

* [NodeJS](http://nodejs.cn/)
* IDE，本人使用的是 *[VSCode](https://code.visualstudio.com/)* , *[Visual Studio 2017](https://www.visualstudio.com/downloads/?rr=https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DopLbcZL9X9-z6HPCTvzADkN848VYTDiIHSNV6r6Y1QnoGyoVs0ByCxolC1TAIk_yJ2zJ4pyxldjjSiT4kuZf2a%26wd%3D%26eqid%3Db98c8eb000015d19000000055aa24809)*

### 必备知识

* TypeScript语法
* 三斜线指令
* d.ts的书写
* JSDOC

---

## 演示

### 1. 编写定义文件

我们在开发目录的根目录中创建一个文件 **Human.d.ts** 内容是一个标准的 *TypeScript* 定义文件
```typescript
/**
 * 表示人的类型
 */
declare class Human{

    /**
     * 说Hello的方法
     */
    public sayHello():void
}
```

### 2. 编写一个js脚本

我们要开头添加一个三斜线指令，表示要加载的定义文件
```javascript
/// <reference path="./Human.d.ts" />
```

效果如下图：
![](/imgs/UserIntelliSenseInJavaScript_001.png)


如果想在一个function中表示参数的类型，必根据该类型进行智能提示则参考下面的例子
![](/imgs/UserIntelliSenseInJavaScript_002.png)
> 使用注释的方法，告之 *IDE* h的类型是 Human，*IDE* 便可以进行智能提示

### 不使用相对路径引用d.ts文件

最好的办法是在从开发根目录开始，创建 **node_modules/@types/{{ yourName }}/index.d.ts** 文件，并将所有的定义写入index.d.ts文件中

然后将三斜线指令改为如下形式
```javascript
/// <reference types="yourName" />
```

> 注意：路径中的 *{{ yourName }}* 和 三斜线指令中的 *yourName* 替换为你自己定义的名称

### 使用已经存在的d.ts文件

以下几种方法均可以让你的 *IDE* 加载别人开发好的 *d.ts* 文件

* 使用npm安装，比如安装jquery的定义文件
```cmd
npm install @types/jquery
```
* 将d.ts文件移动到 **node_modules/@types/{{ yourName }}/** 中，并改为 **index.d.ts**

---

## 参考资料

1. [TypeScript文档](https://www.tslang.cn/docs/home.html)
2. [JSDoc文档](http://www.css88.com/doc/jsdoc/index.html)

<br />
<br />
<br />