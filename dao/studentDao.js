var dbutil = require("./dbutil");

/**查询所有学生 */
function queryAllStudents (success) {
  // 查询词条
  var querySql = "select * from student";
  // 创建数据库链接
  var connection = dbutil.createConnection();
  // 链接
  connection.connect();
  // 查询
  connection.query(querySql, function (error, result) {
    if (result) {
       console.log(result);
       success(result)
    } else {
      throw new Error (error);
    }
  })
  // 断开数据库链接
  connection.end();
}
// 导出
module.exports = {
  "queryAllStudents" : queryAllStudents
}