# Bootstrap中表格如何以内容作为宽度并显示滚动条

## 目标

Boostrap中的**table**样式会使表在非移动中以100%宽度显示

```css
.table{
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
}
```

也就是说，如果表格列数太多，就会显示非常拥挤难看，因此有的时候我们希望table在大屏中也能够具备移动端中可以水平滚动的效果。

#### 没有废话，下面是代码

```html
<div class="table-responsive">
    <table class="table text-nowrap">
        <thead>
            <tr>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>
```

嗯，其实没有特别之处，就是加一个text-nowarp的样式，让单元格内的文本不换行，就行了



---

[返回首页](../index.html)

---

**文章非作者原创，转载请注明出处 : [https://segmentfault.com/q/1010000009900107](https://segmentfault.com/q/1010000009900107)**

