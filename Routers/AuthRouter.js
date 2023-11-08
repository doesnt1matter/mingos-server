//CREATE INSTANCE OF EXPRESS ROUTER
//Роутеры нужны для маршрутизирования запросов. Этот роутер отвечает за '/auth/...'
const AuthRouter = require("express").Router();

//CONTROLLERS
const AuthController = require("../Controllers/AuthController.js");

//ENDPOINTS
AuthRouter.post("/registration", AuthController.Registation)
AuthRouter.post("/login", AuthController.Login)
AuthRouter.post("/logout", AuthController.Logout)

//EXPORT
module.exports = AuthRouter;