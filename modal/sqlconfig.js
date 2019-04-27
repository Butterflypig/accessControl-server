// 数据库的配置
const mysql = require('mysql');

let db = {
    connect:function(sql,arr,callback){

// 2. 建立连接
        let myconn = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"root",
            database:"project",
            port:3306
        });

//3. 打开连接
        myconn.connect();

//4. 操作数据库
//1. sql 命令 2.参数 3.回调
// sql注入，使用参数化查询
//        let sql = "select * from student where studentno =? AND loginPwd=?";
//        console.log(sql);
        myconn.query(sql,arr,callback);

//5. 关闭连接
        myconn.end();
    }

}

module.exports = db;