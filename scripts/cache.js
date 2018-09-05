define(function () {
    return {
        save: function (key, data) {
            window.localStorage.setItem(key, JSON.stringify(data));
        },
        load: function (key) {
            return JSON.parse(window.localStorage.getItem(key));
        },
        has: function (key) {
            return window.localStorage.getItem(key) !== null;
        },
        each: function (callback) {
            var length = window.localStorage.length;
            for (var i = 0; i < length; i++) {
                var key = window.localStorage.key(i)
                callback(key, this.load(key));
            }
        }
    };
});