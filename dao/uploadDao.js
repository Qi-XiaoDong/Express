var dbutil = require("./dbutil");


function insertPic (name, pic_path, Pic_size, pic_name,success) {
  // 查询词条
  var insertSql = "insert into user_msg(name, pic_path, Pic_size, pic_name) values (?, ?, ?, ?)";
  // 插入的词条值
  var params = [name, pic_path, Pic_size, pic_name];

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

module.exports = {
  "insertPic" : insertPic
}


