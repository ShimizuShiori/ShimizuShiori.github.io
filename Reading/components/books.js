define(["jquery", "Reading", "vue-router"], function ($, reading, VueRouter) {

    var book = reading.book;

    book.init();

    return function (callback) {
        var obj = {
            path: "/books",
            component: {
                data: function () {
                    return {
                        books: book.loadBooks()
                    }
                },
                template: "",
                methods: {
                    CreateClick: function () {
                        this.$router.push({
                            path: 'book/-1'
                        });
                    },
                    UpdateClick: function (book) {
                        this.$router.push({
                            path: 'book/' + book.id
                        });
                    },
                    goRecords: function () {
                        this.$router.push({
                            path: "/"
                        });
                    }
                }
            }
        };
        $.get("./components/books.html", function (html) {
            obj.component.template = html;
            callback(obj);
        }, "text");
    }
});