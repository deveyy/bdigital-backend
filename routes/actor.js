/**
 * @author ddthien.dev
 * @date 2022-10-08
 * @contact
 * @email thiendinh.dev@gmail.com
 */

 import  express from "express";
import { createActor } from "../controllers/actor.js";

 const router = express.Router();

 router.post("/create", createActor)

 export default router;