const query = require("./DBService.js").Query

//CREATE SERVICE
//В сервисах пишут бизнес логику, которую используют контроллеры
class UserService {
    async GetAll() {
        const result = await query("select * from users");
        return result;
    }

    async GetOne(identificator) {
        const result = await query("select * from users where id=? or telephone=?", [identificator, identificator]);
        return result;
    }

    async Create(data) {

    }

    async Update() {

    }

    async Delete() {

    }
}

//EXPORT
module.exports = new UserService();