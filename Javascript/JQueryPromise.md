# Async callback via JQuery.Deferred

<style type="text/css">
iframe{
    width:100%;
    border-width:0px;
}
</style>

```javascript
function getData(id) {
    var dtd = $.Deferred();
    if (id <= 0) {
        dtd.reject("ID less than 1!")
    } else {
        setTimeout(() => {
            console.log("getData", id);
            dtd.resolve(`HelloWorld ! ${id}`);
        }, 2000);
    }
    return dtd.promise();
}

//when "call" is clicked
function onGetData() {
    var id = document.getElementById("txt-id").value;
    getData(id)
        .done(d => alert(d))
        .fail(msg => alert("fail :" + msg));
}
```
<iframe src="JQueryPromiseDoneFail.html">
</iframe>

---

[返回首页](../index.html)