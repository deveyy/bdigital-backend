
/**
 * @author ddthien.dev
 * @date 2022-10-07
 * @contact
 * @email thiendinh.dev@gmail.com
 */

import crypto from "crypto";

const sendError = (res, error, statusCode = 401) => {
    res.status(statusCode).json({ error });
};

const generateRandomByte = () => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(30, (err, buff) => {
        if (err) reject(err);
        const buffString = buff.toString("hex");
  
        console.log(buffString);
        resolve(buffString);
      });
    });
};

const handleNotFound = (req, res) => {
  this.sendError(res, 'Not found', 404);
}

export  {sendError, generateRandomByte, handleNotFound};