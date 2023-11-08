//CREATE INSTANCE OF EXPRESS ROUTER
//Роутеры нужны для маршрутизирования запросов. Этот роутер отвечает за '/user/...'
const UserRouter = require("express").Router();

//CONTROLLERS
const UserController = require("../Controllers/UserController.js");

//ENDPOINTS
UserRouter.get("/all", UserController.GetAll)
UserRouter.put("/update", UserController.UpdateAccount)
UserRouter.delete("/delete", UserController.DeleteAccount)

//EXPORT
module.exports = UserRouter;