require.config({
    paths: {
        reqwest: "https://cdn.bootcss.com/reqwest/2.0.5/reqwest.min",
        jquery: "https://cdn.bootcss.com/jquery/3.3.1/jquery.min",
        marked: "https://cdn.bootcss.com/marked/0.3.12/marked.min"
    },
    sim: {
        markdown: "https://cdn.bootcss.com/markdown.js/0.6.0-beta1/markdown.min",
        vue: "https://cdn.bootcss.com/vue/2.5.13/vue.min.js"
    },
    shim: {
        vue: {
            exports: "Vue"
        }
    }
});
