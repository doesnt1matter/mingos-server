const fs = require("fs");
const crypto = require("crypto");

//CREATE SERVICE
//В сервисах пишут бизнес логику, которую используют контроллеры
class CryptService {
    async Encrypt(data) {
        const publicKey = fs.readFileSync(`${process.cwd()}/Keys/public.pem`)

        const encryptedData = crypto.publicEncrypt(
            {
                key: publicKey,
                padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
                oaepHash: "sha256",
            },
            Buffer.from(data)
        );

        return encryptedData.toString("base64");
    }

    async Decrypt(data) {
        const privateKey = fs.readFileSync(`${process.cwd()}/Keys/private.pem`)

        const decryptedData = crypto.privateDecrypt(
            {
              key: privateKey,
              padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
              oaepHash: "sha256",
            },
            Buffer.from(data, "base64")
          );
        
        return decryptedData.toString("utf-8");
    }
}

//EXPORT
module.exports = new CryptService();