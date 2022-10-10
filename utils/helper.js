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

const formatShowreel = (showreel) => {
  const { name, timeline, url, about, _id, avatar } = showreel;
  return {
    id: _id,
    name,
    about,
    timeline,
    url,
    avatar: avatar?.url,
  };
};

const formatHome = (home) => {
  const { image, title, url, _id } = home;
  return {
    id: _id,
    title,
    url,
    image: image?.url,
  };
};

const handleNotFound = (req, res) => {
  this.sendError(res, "Not found", 404);
};

export {
  sendError,
  generateRandomByte,
  handleNotFound,
  formatShowreel,
  uploadImageToCloud,
  formatHome,
};
