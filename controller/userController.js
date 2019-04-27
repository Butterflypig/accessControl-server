const userModal = require("./../modal/userModal.js");
let userConntroll = {
    logindo:function (req,res){
        let user = req.body.txtUserName;
        let pwd = req.body.txtPwdName;

        console.log("账号或密码",user,pwd);
        

       userModal.logindo(user,pwd,function(err,data){
           console.log("err",err);
           console.log("data",data);
           if(!err){ //err 为null , 代码正确
               if(data.length>0){
                   res.send("登录成功");
               }else{
                   res.send("账号或密码");
               }
           }else{
               console.log(err);
               res.send("数据库出错，请联系管理员");
           }
       })

    },
    select:function(req,res){
       userModal.select(function(err,data){
           let str = "<table><tr><th>学号</th><th>姓名</th></tr>";
           for(var i=0;i<data.length;i++){
               str +="<tr><td>"+data[i].studentNo+"</td><td>"+data[i].studentName+"</td></tr>";
           }
           str+="</table>";

           res.send(str);
       })
    },
    del : function(req,res){

    }
}
module.exports = userConntroll;
