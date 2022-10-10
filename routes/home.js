/**
 * @author ddthien.dev
 * @contact
 * @email thiendinh.dev@gmail.com
 */

import express from "express";
import {
  createHome,
  deleteHome,
  getLatestHome,
  getSingleHome,
  updateHome,
} from "../controllers/home.js";

import { isAdmin, isAuth } from "../middlewares/auth.js";
import { uploadImage } from "../middlewares/multer.js";
import { validate } from "../middlewares/validator.js";

const router = express.Router();

router.post(
  "/create",
  isAuth,
  isAdmin,
  uploadImage.single("image"),
  validate,
  createHome
);

router.post(
  "/update/:homeId",
  isAuth,
  isAdmin,
  uploadImage.single("image"),
  validate,
  updateHome
);

router.delete("/delete/:homeId", isAuth, isAdmin, deleteHome);

router.get("/latest", getLatestHome);

router.get("/single/:id", getSingleHome);

export default router;
