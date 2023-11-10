const query = require("./DBService.js").Query

const IDService = require("./IDService.js");
const CryptService = require("./CryptService.js");

//CREATE SERVICE
//В сервисах пишут бизнес логику, которую используют контроллеры
class PasswordService {

    async GetOne(identificator) {
        const result = await query("select * from passwords where id=? or user_id=?", [identificator, identificator]);
        return result[0];
    }

    async Create(userId, password) {
        const encryptedPassword = await CryptService.Encrypt(password);

        await query(`insert into passwords (id, value, user_id) 
        values (?,?,?)`,
            [IDService.GenerateID(), encryptedPassword, userId]
        );

        const result = await this.GetOne(userId);
        return result;
    }

    async Compare(userId, password) {
        const passwordDTO = await this.GetOne(userId);
        const decryptedPassword = await CryptService.Decrypt(passwordDTO.value)

        if (password == decryptedPassword) return true;
        else return false;
    }

    async Update(userId, password) {
        const encryptedPassword = await CryptService.Encrypt(password);
        
        await query(`update passwords
        set
        value=?
        where user_id=?`, [encryptedPassword, userId]);

        const passwordDTO = await query(`select * from passwords where user_id=?`, [userId]);
        return passwordDTO;
    }

    async Delete(id) {
        await query(`delete from passwords where id=? or user_id=?`, [id, id]);
    }
}

//EXPORT
module.exports = new PasswordService();