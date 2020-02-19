var dbutil = require("./dbutil");

/**
 * 查询所有学生
 * @param {*} success 回调函数
 */
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


/**
 * 插入学生
 * @param {*} stuNum 
 * @param {*} stuName 姓名
 * @param {*} stuAge 年龄
 * @param {*} stuClass 班级
 * @param {*} stuPwd 密码
 * @param {*} success 回调函数
 */
function insertStudent (stuNum, stuName, stuAge, stuClass, stuPwd, success) {
  // 查询词条
  var insertSql = "insert into student(stu_num, name, age, class, pwd) values (?, ?, ?, ?, ?)";
  // 插入的词条值
  var params = [stuNum, stuName, stuAge, stuClass, stuPwd];
  // 创建数据库链接
  var connection = dbutil.createConnection();
  // 链接
  connection.connect();
  // 插入
  connection.query(insertSql, params, function (error, result) {
    if (result) {
       success(result)
    } else {
      throw new Error (error);
    }
  })
  // 断开数据库链接
  connection.end();
}

/**
 * 根据学号查询学生
 * @param {*} stuNam 
 * @param {*} success 
 */
function queryStudentByStuNum (stuNum, success) {
  var querySql = 'select * from student where stu_num = ?';
  var params = [stuNum];

  var connection = dbutil.createConnection();
  connection.connect();
  connection.query(querySql, params, function (error ,result) {
    if (result) {
      success(result);
    }else{
      throw new Error(error);
    }
  })
  connection.end();
}



// 导出
module.exports = {
  "queryAllStudents" : queryAllStudents,
  "insertStudent" : insertStudent,
  "queryStudentByStuNum" : queryStudentByStuNum
}