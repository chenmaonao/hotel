const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/hotel", {
            target: "http://api01.idataapi.cn:8000",
            changeOrigin: true
        })
    );
};

