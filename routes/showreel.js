/**
 * @author ddthien.dev
 * @date 2022-10-08
 * @contact
 * @email thiendinh.dev@gmail.com
 */

import express from "express";
import {
  createShowreel,
  deleteShowreel,
  getLatestShowreels,
  getSingleShowreel,
  searchShowreel,
  updateShowreel,
} from "../controllers/showreel.js";
import { isAdmin, isAuth } from "../middlewares/auth.js";
import { uploadImage } from "../middlewares/multer.js";
import { showreelInfoValidator, validate } from "../middlewares/validator.js";

const router = express.Router();

router.post(
  "/create",
  isAuth,
  isAdmin,
  uploadImage.single("avatar"),
  showreelInfoValidator,
  validate,
  createShowreel
);

router.post(
  "/update/:showreelId",
  isAuth,
  isAdmin,
  uploadImage.single("avatar"),
  showreelInfoValidator,
  validate,
  updateShowreel
);

router.delete("/delete/:showreelId", isAuth, isAdmin, deleteShowreel);

router.get("/search", searchShowreel);
router.get("/latest-uploads", getLatestShowreels);
router.get("/single/:id", getSingleShowreel);

export default router;
