//CREATE SERVICE
//В сервисах пишут бизнес логику, которую используют контроллеры
class ErrorService 
{
        ThrowBadRequest(message)
        {
            let error = new Error(message);
            error.status = 400;
            error.type = "BAD REQUEST"
            throw error;
        }

        ThrowServerError(message)
        {
            let error = new Error(message);
            error.status = 500;
            error.type = "SERVER ERROR"
            throw error;
        }
}

//EXPORT
module.exports = new ErrorService();