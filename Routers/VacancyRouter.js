//CREATE INSTANCE OF EXPRESS ROUTER
//Роутеры нужны для маршрутизирования запросов. Этот роутер отвечает за '/vacancy/...'
const VacancyRouter = require("express").Router();

//CONTROLLERS
const VacancyController = require("../Controllers/VacancyController.js");

//ENDPOINTS
VacancyRouter.get("/:{id}", VacancyController.GetOne(req, res))
VacancyRouter.get("/all", VacancyController.GetAll(req, res))
VacancyRouter.get("/create", VacancyController.Create(req, res))
VacancyRouter.get("/update/:{id}", VacancyController.Update(req, res))
VacancyRouter.get("/delete/:{id}", VacancyController.Delete(req, res))

//EXPORT
module.exports = new VacancyRouter();