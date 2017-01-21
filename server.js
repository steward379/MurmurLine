//使用 express
var express = require("express");
var app = express();

// 使用 handelbars (取消就將其他 // 的開啟)
var handlebars = require("express-handlebars").create({
    defaultLayout: "main"
});
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

// 讓預設路徑從 public 開始
app.use(express.static(__dirname + "/public"));

// 解析表單的套件
app.use(require("body-parser")());

// 設定
app.set("port", process.env.PORT || 3000);

// 首頁
app.get("/", function(req, res) {
    // res.type("text/plain");
    // res.send("index page");
    res.render("index");
});

// 表單
app.get("/form", function(req, res) {
    res.render("form");
});

// 送出表單之後
app.post("/form", function(req, res) {
    console.log("username" + req.body.username);
    console.log(req.body.password);
    console.log(req.body.check_password);
    console.log(req.body.realname);
    console.log(req.body.age);
    console.log(req.body.email);
    res.redirect("/");
});


app.get("/googlea24fbd46797b33f4.html", function(req, res) {
    // res.type("text/plain");
    // res.send("about me");
    res.render("googlea24fbd46797b33f4.html");
});

// 找不到頁面
app.use(function(req, res, next) {
    // res.type("text/plain");
    res.status(404);
    // res.send("404-Not Found");
    res.render("404");
});

// 伺服器壞了
app.use(function(err, req, res, next) {
    console.error(err.stack);
    // res.type("text/plain");
    res.status(500);
    // res.send("500 -Internal Eroor");
    res.render("500");
});

//成功了
app.listen(app.get("port"), function() {
    console.log("Server started: http://localhost:" + app.get("port"));
});
