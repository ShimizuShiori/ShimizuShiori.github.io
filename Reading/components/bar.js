define(["vue"], function (Vue) {
    var html = '<button v-on:click="count++">You clicked me {{ count }} times.</button>';

    return {
        path: "/",
        component: {
            data: function () {
                return {
                    count: 0
                };
            },
            template: html
        }
    }
});