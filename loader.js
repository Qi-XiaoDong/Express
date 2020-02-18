/** 捕捉到所有web请求处理程序 */

var fs = require("fs")   // 文件系统

var globalConfig = require("./config")  // 读取全局配置，为了找到web层地址

var controllerSet = [];    // 保存所有web请求处理程序

var pathMap = new Map();   // 保存所有web请求处理程序

var files = fs.readdirSync(globalConfig["web_path"])  // 读取到web中所有的ctller文件

function init (app) {
  for (var i = 0; i < files.length; i++ ) {
    var temp = require("./" + globalConfig["web_path"] + "/" + files[i]);  // 得到ctaller文件的导出值
    
    if (temp.path) {
      controllerSet.push(temp)   // 保存每一个ctaller文件的导出值

      for (var [key, value] of temp.path) {

        if (!pathMap.get(key)) {

          pathMap.set(key, value);   // 保存所有web请求处理程序

          app.get(key,value);     // 监控所有web请求处理程序
        } else {

          throw new Error('url path 异常', 'url' + k + '重复定义');  // key 是不可以重复的，key为访问的接口地址，是唯一的
        }
      }
    } else {
      throw new Error(files[i] + '未定义path');    // ctaller文件必须导出path
    }
  }
}
// console.log(pathMap);

module.exports.init = init;