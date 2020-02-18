/**学生请求服务层 */

var studentDao = require('../dao/studentDao');

/**查询所有学生 */
function queryAllStudents (success) {
    studentDao.queryAllStudents (success);
}

function insetStudent (stu_num,name,age,stu_class,pwd,success) {
    studentDao.insetStudent(stu_num,name,age,stu_class,pwd,success);
}

function queryStudentByStuNum ( stu_num, success ) {
    studentDao.queryStudentByStuNum (stu_num ,success);
}
// 导出
module.exports = {
    'queryAllStudents' : queryAllStudents,
    'insetStudent' : insetStudent,
    'queryStudentByStuNum' : queryStudentByStuNum,
}