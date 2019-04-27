const myexpress = require('express');
const userRouter = myexpress.Router();
// express.Router类   app.route()
const userController = require("./../controller/userController.js");

userRouter.route("/login.do").post(userController.logindo);
userRouter.route("/select.do").get(userController.select);
userRouter.route("/del.do").post(userController.del);

module.exports = userRouter;