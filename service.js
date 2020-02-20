/**
 * 服务程序
 */
var express = require('express');         // 下载express框架

var cookie = require('cookie-parser');    // 下载cookie解析

var multer = require('multer');      // 解析文件上传

var uploadDao = require("./dao/uploadDao");

var globalConfig = require("./config");   // 导入全局配置

// var studentCtller = require("./web/studentCtller"); // 导入查询学生请求Ctller【1】

var loader = require("./loader");  // 为了避免catller文件太多 【简化1】

var app = new express();                  // 定义服务器对象

app.use(cookie())   // 解析cookie



var uploadSingle = multer ({dest: "./file/"});  // 配置文件上传地址


app.use(express.static("./" + globalConfig["page_path"]));        // 设置静态文件路径

/**
 * 拦截器：当访问的接口带有api字段先进行拦截
 * 读写cookie
 */
app.get("/api/*", function (requset, response, next) {
  // 如果cookie有id 不拦截 否则跳转
  if (requset.cookies.id) {
    next() ;
  } else {
    response.redirect("/login.html");
  }

});

// app.get("/queryAllStudent", studentCtller.path.get("/queryAllStudent"))  // 访问 /queryAllStudent 时处理程序 【2】

loader.init(app) ; // 【简化2】

// 文件存放
app.post("/upload", uploadSingle.single("file"), function (request, response) {
    var pic_name = request.file.originalname;
    var pic_path = request.file.path;
    var name = request.body.name;
    var pic_size = request.file.size;
    uploadDao.insertPic(name, pic_path, pic_size, pic_name ,function () {
      response.writeHead(200);
      var obj = {
        pic_path : pic_path
      }
      response.write(JSON.stringify(obj));
      response.end();
    })
});

app.listen(globalConfig["port"]);                        // 监听服务端口 运行程序


