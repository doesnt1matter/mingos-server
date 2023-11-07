//CREATE INSTANCE OF EXPRESS ROUTER
//Роутеры нужны для маршрутизирования запросов. Этот роутер отвечает за '/vacancy/...'
const VacancyRouter = require("express").Router();

//CONTROLLERS
const VacancyController = require("../Controllers/VacancyController.js");

//ENDPOINTS
VacancyRouter.get("/all", VacancyController.GetAll)
VacancyRouter.get("/:id", VacancyController.GetOne)
VacancyRouter.get("/create", VacancyController.Create)
VacancyRouter.get("/update/:{id}", VacancyController.Update)
VacancyRouter.get("/delete/:{id}", VacancyController.Delete)

//EXPORT
module.exports = VacancyRouter;