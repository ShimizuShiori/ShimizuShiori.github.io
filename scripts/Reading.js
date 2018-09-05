define(["cache"], function (cache) {

    function save(key, data) {
        cache.save(key,data);
    }

    function load(key) {
        return cache.load(key);
    }

    function has(key) {
        return cache.has(key);
    }


    return {
        book: {
            saveBooks: function (books) {
                save("books", books);
            },
            loadBooks: function () {
                return load("books");
            },
            addBook: function (book) {
                var books = this.loadBooks();
                books.push(book)
                this.saveBooks(books);
            },
            removeBook: function (id) {
                var books = this.loadBooks();
                var index = -1;
                for (var i = 0; i < books.length; i++) {
                    if (books[i].id === id) {
                        index = i;
                        break;
                    }
                }
                if (index !== -1) {
                    books.splice(index, 1);
                    this.saveBooks(books);
                }
            },
            updateBook: function (book) {
                var books = this.loadBooks();
                var index = -1;
                for (var i = 0; i < books.length; i++) {
                    if (books[i].id === book.id) {
                        index = i;
                        break;
                    }
                }
                if (index !== -1) {
                    books[index] = book;
                    this.saveBooks(books);
                }
            },
            init: function () {
                if (this.loadBooks() === null) {
                    var initBookNames = ['绘本', '牛津树', '培生幼儿', '我的第一套图书馆', '海尼曼', 'Raz', '牛津自然拼读', '牛津字典', '鹅妈妈', '米菲', '用美国幼儿园课本学英语', 'peppa pig', '鹅妈妈'];
                    var index = 1;
                    var books = initBookNames.map(x => {
                        return {
                            id: index++,
                            name: x
                        }
                    });
                    this.saveBooks(books);
                }
            },
            getBook: function (id) {
                var books = this.loadBooks();
                return books.filter(x => x.id === id)[0];
            }
        },
        records: {
            save: function (records) {
                if (!has("records_" + records.date)) {
                    var array = load("record_dates");
                    if (array === null) array = [];
                    array.push(records.date);
                    save("record_dates", array);
                }
                save("records_" + records.date, records);
            },
            load: function (date) {
                var rlt = load("records_" + date);
                if (rlt === null)
                    rlt = {
                        date: date,
                        records: []
                    };
                return rlt;
            }
        }
    }

});