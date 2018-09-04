define(["jquery", "Reading"], function ($, reading) {

    var book = reading.book;
    var records = reading.records;

    return function (callback) {
        var obj = {
            path: "/",
            component: {
                data: function () {
                    var books = book.loadBooks();
                    var result = {
                        date: (new Date()).toJSON().substr(0, 10),
                        books: books,
                        records: []
                    };

                    result.records = records.load(result.date).records;
                    if (result.records.length === 0 && books.length > 0)
                        result.records.push({
                            bookId: books[0].id,
                            count: 1
                        });

                    return result;
                },
                template: "",
                methods: {
                    addRow: function () {
                        this.records.push({
                            bookId: this.books[0].id,
                            count: 1
                        });
                    },
                    save: function () {
                        var sumReocrds = [];
                        for (var i = 0; i < this.records.length; i++) {
                            var r = this.records[i];
                            var extists = sumReocrds.filter(x => x.bookId == r.bookId);
                            if (extists.length === 0) {
                                sumReocrds.push(r);
                            } else {
                                extists[0].count += r.count;
                            }
                        }
                        records.save({
                            date: this.date,
                            records: sumReocrds
                        });
                        alert("保存成功");
                        this.records = sumReocrds;
                    },
                    books: function () {
                        this.$router.push({
                            path: "/books"
                        });
                    }
                },
                created: function () {
                    if (this.books.length === 0)
                        alert("没有书籍信息，先请维护书籍信息");
                    this.$router.push({
                        path: "/books"
                    });
                }
            }
        };
        $.get("./components/record.html", function (html) {
            obj.component.template = html;
            callback(obj);
        }, "text");
    }
});