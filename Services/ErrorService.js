//CREATE SERVICE
//В сервисах пишут бизнес логику, которую используют контроллеры
class ErrorService 
{
        ThrowBadRequest(message)
        {
            let error = new Error("BAD_REQUEST: " + message);
            error.status = 400;
            throw error;
        }

        ThrowServerError(message)
        {
            let error = new Error("SERVER_REQUEST: " + message);
            error.status = 500;
            throw error;
        }
}

//EXPORT
module.exports = new ErrorService();