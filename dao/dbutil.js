/**链接数据库 */
var mysqol = require('mysql');
/**
 * 将数据库连接
 * 为什么用了一个函数？
 * 因为我们在每一次操作完数据库结束的时候都会关闭连接，这样在第二次进行访问时就会产生问题
 * 使用函数的形式在每一次操作的内部创建连接，这样即使关闭了本次连接，在下一次访问时也会重新建立连接
 */
function createConnection () {
    var connection = mysqol.createConnection({
        host : '127.0.0.1',
        port : '3306',
        user : 'root',
        password : 'qxd19950916',
        database : 'school'
    });
    return connection;
}
module.exports.createConnection = createConnection;