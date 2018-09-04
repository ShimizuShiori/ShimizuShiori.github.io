define([], function () {

    function save(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }

    function load(key) {
        return JSON.parse(window.localStorage.getItem(key));
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
                debugger;
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
                if (this.loadBooks() === null)
                    this.saveBooks([]);
            },
            getBook: function (id) {
                var books = this.loadBooks();
                return books.filter(x => x.id === id)[0];
            }
        }
    }

});