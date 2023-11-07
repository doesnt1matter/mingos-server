//CREATE INSTANCE OF EXPRESS ROUTER
//Роутеры нужны для маршрутизирования запросов. Этот роутер отвечает за '/vacancy/...'
const AuthRouter = require("express").Router();

//CONTROLLERS
const AuthController = require("../Controllers/AuthController.js");

//ENDPOINTS
AuthRouter.post("/registration", AuthController.Registation)

//EXPORT
module.exports = AuthRouter;