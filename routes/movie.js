import express from "express";
import { createMovie, uploadTrailer } from "../controllers/movie.js";
import { isAuth, isAdmin } from "../middlewares/auth.js";
import { uploadVideo, uploadImage } from "../middlewares/multer.js";
import { validateMovie, validate } from "../middlewares/validator.js";
import { parseData } from "../utils/helper.js";

const router = express.Router();

router.post(
  "/upload-trailer",
  isAuth,
  isAdmin,
  uploadVideo.single("video"),
  uploadTrailer
);

router.post(
  "/create",
  isAuth,
  isAdmin,
  uploadImage.single("poster"),
  parseData,
  validateMovie,
  validate,
  createMovie
);

export default router;
