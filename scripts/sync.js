define(["jquery", "cache", "Reading"], function ($, cache, reading) {

    var lastSyncDateKey = "LastSyncDate";
    var today = (new Date()).toJSON().substr(0, 10);
    if (cache.has(lastSyncDateKey)) {
        var lastSyncDate = cache.load(lastSyncDateKey);
        if (lastSyncDate < today && window.confirm("是否上传数据?")) {

            //上传数据
            cache.each((key, value) => {
                console.log("向服务器上传数据", key, value);
            });
        }
    } else {
        //从服务器下载数据

        if (reading.book.loadBooks() === null) {
            alert("没有从服务器得到任何数据，准备进行本地初始化");
            reading.book.init();
        }
    }
    cache.save(lastSyncDateKey, today);

});