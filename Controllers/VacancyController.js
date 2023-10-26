const IDService = require("../Services/IDService.js");
const VacancyService = require("../Services/VacancyService.js");

//CLASS OF CONTROLLER
//В контроллерах пользуются сервисами(бизнес-логикой) и пишут всякие проверки
class VacancyController 
{

    async GetAll(req, res)
    {
        try 
        {
            console.log(1);
            res.status(200).json(JSON.parse(IDService.GenerateID()));
        } 
        catch (error) 
        {
            
        }
    }

    async GetOne(req, res)
    {
        try 
        {
            console.log(req.params);
        } 
        catch (error) 
        {
            
        }
    }

    async Create(req, res)
    {
        try 
        {
            
        } 
        catch (error) 
        {
            
        }
    }

    async Update(req, res)
    {
        try 
        {
            
        } 
        catch (error) 
        {
            
        }
    }

    async Delete(req, res)
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