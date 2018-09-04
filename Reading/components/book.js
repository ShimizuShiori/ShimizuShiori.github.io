define(["jquery", "Reading"], function ($, reading) {

    var book = reading.book;


    return function (callback) {
        var obj = {
            path: "/book/:id",
            component: {
                data: function () {
                    var id = parseInt(this.$route.params.id);
                    if (id === -1)
                        return {
                            book: {
                                id: id,
                                name: ""
                            }
                        }
                    else {
                        return {
                            book: book.getBook(id)
                        };
                    }
                },
                computed: {
                    title: function () {
                        return this.book.id === -1 ? "新建" : "修改";
                    }
                },
                template: "",
                methods: {
                    saveBook: function () {
                        if (this.book.id === -1) {
                            this.book.id = (new Date()).valueOf();
                            book.addBook(this.book);
                        } else
                            book.updateBook(this.book);
                        alert("保存成功");
                        this.$router.push({
                            path: "/books"
                        });
                    }
                }
            }
        };
        $.get("./components/book.html", function (html) {
            obj.component.template = html;
            callback(obj);
        }, "text");
    }
});