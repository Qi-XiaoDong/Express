/**
 * 解析配置文件
 */
var fs = require('fs');   // 加载文件系统

var globalConfig = {};    // 全局配置对象

var conf = fs.readFileSync("./server.conf");  // 读取配置文件

var confArr = conf.toString().split("\n");    // [ 'port=12306', 'path_path=page' ]

for (var i = 0; i < confArr.length; i++) {   // 将配置文件添加到 globalConfig 全局对象中
    globalConfig[confArr[i].split("=")[0]] = confArr[i].split("=")[1].trim();
}  

module.exports = globalConfig;







console.log(conf);

