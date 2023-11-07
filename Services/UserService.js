const db = require("../database.js");
const IDService = require("./IDService.js")

//CREATE SERVICE
//В сервисах пишут бизнес логику, которую используют контроллеры
class UserService {
    async GetAll() {
        db.query("select * from users", (error, results) => {
            if(error) console.log(error);
            else console.log(results);
        });
        return undefined;
    }

    GetOne(identificator) {

    }

    Create(data) {

    }

    Update() {

    }

    Delete() {

    }
}

//EXPORT
module.exports = new UserService();