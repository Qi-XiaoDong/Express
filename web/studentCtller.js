/**捕捉学生信息请求 */

var url = require("url");   // 解析参数

var studentServe = require("../service/studentService");

var path = new Map();    // 存储此文件的请求处理程序

/**
 * 查询所有学生 拉取数据
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

/**
 * 上传数据
 * @param {*} request 
 * @param {*} response 
 */
function insertStudent (request, response) {
  // 解析参数得到对象形式
  var params = url.parse(request.url, true).query;
  
  // 解构参数
  var {stuNum, stuName, stuAge, stuClass, stuPwd} = params;
 
  // 调用插入学生程序
  studentServe.insertStudent(stuNum, stuName, stuAge, stuClass, stuPwd, function () {
    response.writeHead(200,{"Content-Type": "text/html; charset=utf-8"});
    response.write("添加成功");
    response.end()
  });
}
path.set("/insertStudent", insertStudent);


module.exports.path = path;