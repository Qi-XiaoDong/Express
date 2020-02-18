/**捕捉学生信息请求 */

var studentServe = require("../service/studentService");

var path = new Map();    // 存储此文件的请求处理程序
/**
 * 查询所有学生
 * @param {*} request 请求头
 * @param {*} response 响应头
 */
function queryAllStudent (request, response ) {
  // 调用数据库
  studentServe.queryAllStudents(function (result) {
    response.writeHead(200) // 返回状态码;
    response.write(JSON.stringify(result));
    response.end(); // 断开响应传输
  })
}

path.set("/queryAllStudent", queryAllStudent);

module.exports.path = path;