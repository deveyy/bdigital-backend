/**
 * @author ddthien.dev
 * @date 2022-10-08
 * @contact
 * @email thiendinh.dev@gmail.com
 */

 import  express from "express";
import { createActor } from "../controllers/actor.js";
import { uploadImage } from "../middlewares/multer.js";

 const router = express.Router();

 router.post("/create", uploadImage.single("avatar"), createActor)

 export default router;