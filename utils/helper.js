/**
 * @author ddthien.dev
 * @date 2022-10-07
 * @contact
 * @email thiendinh.dev@gmail.com
 */

import crypto from "crypto";
import cloudinary from "../config/cloudinary.js";

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

const uploadImageToCloud = async (file) => {
  const { secure_url: url, public_id } = await cloudinary.v2.uploader.upload(
    file,
    { gravity: "face", height: 500, width: 500, crop: "thumb" }
  );

  return { url, public_id };
};

const formatActor = (actor) => {
  const { name, gender, about, _id, avatar, createdAt, updatedAt } = actor;
  return {
    id: _id,
    name,
    about,
    gender,
    avatar: avatar?.url,
    createdAt,
    updatedAt,
  };
};

const handleNotFound = (req, res) => {
  this.sendError(res, "Not found", 404);
};

export {
  sendError,
  generateRandomByte,
  handleNotFound,
  formatActor,
  uploadImageToCloud,
};
