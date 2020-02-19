/**学生请求服务层 */

var studentDao = require('../dao/studentDao');

/**查询所有学生 */
function queryAllStudents (success) {
    studentDao.queryAllStudents (success);
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
    studentDao.insertStudent(stuNum, stuName, stuAge, stuClass, stuPwd, success);
}

/**
 * 根据学号查询学生
 * @param {*} stu_num  学号
 * @param {*} success 
 */
function queryStudentByStuNum ( stu_num, success ) {
    studentDao.queryStudentByStuNum (stu_num ,success);
}

// 导出
module.exports = {
    'queryAllStudents' : queryAllStudents,
    'insertStudent' : insertStudent,
    'queryStudentByStuNum' : queryStudentByStuNum,
}