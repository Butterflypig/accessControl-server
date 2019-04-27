
const myexpress = require("express"); //引用express的模块
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require("./routers/userRouter.js");
const app = myexpress(); //执行express里的全局函数，返回一个express的服务器对象

app.use(logger('dev')); //设置日志级别
app.use(favicon(__dirname+"/public/favicon.ico"));//设置图片显示的地址
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); //application/x-www-form-urlencoded 编码
app.use(cookieParser());
app.use(myexpress.static(__dirname+"/public",{index:"loginclass.html"}));
app.use(userRouter);
// app.get app.post app.route().get().post()
// request.query
// post request.body
app.listen(8888,function(){
    console.log("服务启动")
})