/**
 * @author ddthien.dev
 * @contact
 * @email thiendinh.dev@gmail.com
 */
import express from "express";
import {
  createContact,
  deleteContact,
  getLatestContact,
  getSingleContact,
  updateContact,
} from "../controllers/contact.js";
import { isAdmin, isAuth } from "../middlewares/auth.js";
import { validate } from "../middlewares/validator.js";

const router = express.Router();

router.post("/create", isAuth, isAdmin, validate, createContact);

router.post("/update/:contactId", isAuth, isAdmin, validate, updateContact);

router.delete("/delete/:contactId", isAuth, isAdmin, deleteContact);

router.get("/latest", getLatestContact);

router.get("/single/:id", getSingleContact);

export default router;
