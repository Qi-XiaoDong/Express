/**
 * 服务程序
 */
var express = require('express');         // 下载express框架

var globalConfig = require("./config");   // 导入全局配置

// var studentCtller = require("./web/studentCtller"); // 导入查询学生请求Ctller【1】

var loader = require("./loader");  // 为了避免catller文件太多 【简化1】

var app = new express();                  // 定义服务器对象

app.use(express.static("./" + globalConfig["page_path"]));        // 设置静态文件路径

// app.get("/queryAllStudent", studentCtller.path.get("/queryAllStudent"))  // 访问 /queryAllStudent 时处理程序 【2】

loader.init(app)  // 【简化2】

app.listen(globalConfig["port"]);                        // 监听服务端口 运行程序


