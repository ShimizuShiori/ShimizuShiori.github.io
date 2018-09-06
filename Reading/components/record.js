define(["jquery", "Reading", "sync", "MINT", "vue", "dateformat"], function ($, reading, sync, MINT, Vue) {

    Vue.component(MINT.DatetimePicker.name, MINT.DatetimePicker);

    var book = reading.book;
    var records = reading.records;

    book.init();

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
                            bookId: "",
                            count: 0
                        });

                    return result;
                },
                template: "",
                computed: {
                    dateStr: function () {
                        if (typeof this.date === "string") return this.date;
                        return $.format.date(this.date, "yyyy-MM-dd");
                    }
                },
                watch: {
                    date: function (now, old) {
                        var _records = records.load(this.dateStr).records;
                        if (_records.length === 0 && this.books.length > 0)
                            _records.push({
                                bookId: "",
                                count: 0
                            });
                        this.records = _records;
                    }
                },
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
                            date: this.dateStr,
                            records: sumReocrds
                        });
                        alert("保存成功");
                        this.records = sumReocrds;
                    },
                    gotoBooks: function () {
                        this.$router.push({
                            path: "/books"
                        });
                    },
                    remove: function (index) {
                        this.records.splice(index, 1);
                    },
                    showPicker: function () {
                        this.$refs.picker.open();
                    }
                }
            }
        };
        $.get("./components/record.html", function (html) {
            obj.component.template = html;
            callback(obj);
        }, "text");
    }
});