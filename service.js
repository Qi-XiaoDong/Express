/**
 * 服务程序
 */
var express = require('express');         // 下载express框架

var globalConfig = require("./config");   // 导入全局配置

var app = new express();                  // 定义服务器对象

app.use(express.static("./" + globalConfig["page_path"]));        // 设置静态文件路径

app.listen(globalConfig["port"]);                        // 监听服务端口 运行程序

