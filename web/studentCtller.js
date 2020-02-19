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
    response.writeHead(200,{"Content-Type": "text/html; charset=utf-8"});
    response.write(JSON.stringify(result));
    response.end(); // 断开响应传输
  })
}
path.set("/api/queryAllStudent", queryAllStudent);

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
path.set("/api/insertStudent", insertStudent);


/**
 * 登录请求
 * @param {*} request 
 * @param {*} response 
 */
function login (request, response) {
  var params = url.parse(request.url, true).query;   // 解析登录url

  var {stu_num, pwd} = params;   // 解构

  studentServe.queryStudentByStuNum(stu_num,function (result) {  // 查询用户
    if (result.length > 0 && pwd === result[0].pwd) {
      
       response.cookie('id',result[0].id);   // 注入cookie
       
       response.redirect('/api/queryAllStudent');  //重定向

      response.end();  // 响应结束
    }else{
      
      response.redirect('loginError.html');   // 重定向到错误页
    }
  });
}
path.set("/login", login);


module.exports.path = path;