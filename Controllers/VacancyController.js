const IDService = require("../Services/IDService.js");
const VacancyService = require("../Services/VacancyService.js");
const ErrorService = require("../Services/ErrorService.js");

//CLASS OF CONTROLLER
//В контроллерах пользуются сервисами(бизнес-логикой) и пишут всякие проверки
class VacancyController 
{

    async GetAll(req, res, next)
    {
        try 
        {
            res.status(200).json(IDService.GenerateID());
        }
        catch (error) 
        {
            
        }
    }

    async GetOne(req, res, next)
    {
        try 
        {
            if(req.params.id == 1000)
            {
                ErrorService.ThrowBadRequest("msg");
            }
            res.status(200).json(req.params.id);
        } 
        catch (error) 
        {
            next(error)
        }
    }

    async Create(req, res, next)
    {
        try 
        {
            
        } 
        catch (error) 
        {
            
        }
    }

    async Update(req, res, next)
    {
        try 
        {
            
        } 
        catch (error) 
        {
            
        }
    }

    async Delete(req, res, next)
    {
        try 
        {
            
        } 
        catch (error) 
        {
            
        }
    }
}

//EXPORT
module.exports = new VacancyController();