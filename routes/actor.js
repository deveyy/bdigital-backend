/**
 * @author ddthien.dev
 * @date 2022-10-08
 * @contact
 * @email thiendinh.dev@gmail.com
 */

import express from "express";
import {
  createActor,
  deleteActor,
  getLatestActors,
  getSingleActor,
  searchActor,
  updateActor,
} from "../controllers/actor.js";
import { uploadImage } from "../middlewares/multer.js";
import { actorInfoValidator, validate } from "../middlewares/validator.js";

const router = express.Router();

router.post(
  "/create",
  uploadImage.single("avatar"),
  actorInfoValidator,
  validate,
  createActor
);

router.post(
  "/update/:actorId",
  uploadImage.single("avatar"),
  actorInfoValidator,
  validate,
  updateActor
);

router.delete("/delete/:actorId", deleteActor);

router.get("/search", searchActor);
router.get("/latest-uploads", getLatestActors);
router.get("/single/:id", getSingleActor);

export default router;
