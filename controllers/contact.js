import { isValidObjectId } from "mongoose";
import Contact from "../models/contact.js";
import { formatContact, sendError } from "../utils/helper.js";

const createContact = async (req, res) => {
  const { title, about, url, phone } = req.body;
  const newContact = new Contact({ title, about, url, phone });
  await newContact.save();
  res.status(201).json(formatContact(newContact));
};

const updateContact = async (req, res) => {
  const { title, about, url, phone } = req.body;
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    return sendError(res, "Invalid request");
  }
  const contact = await Contact.findById(contactId);
  if (!contact) {
    return sendError(res, "Invalid request, record not found!");
  }

  contact.title = title;
  contact.about = about;
  contact.url = url;
  contact.phone = phone;

  await contact.save();
  res.status(201).json(formatContact(contact));
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) return sendError(res, "Invalid request!");
  const contact = await Contact.findById(contactId);
  if (!contact) return sendError(res, "Invalid request, record not found!");
  await Contact.findByIdAndDelete(contactId);
  res.json({ message: "Record removed successfully." });
};

const getLatestContact = async (req, res) => {
  const result = await Contact.find().sort({ createdAt: "-1" }).limit(12);
  const contacts = result.map((contact) => formatContact(contact));
  res.json(contacts);
};

const getSingleContact = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) return sendError(res, "Invalid request!");

  const contact = await Contact.findById(id);
  if (!contact)
    return sendError(res, "Invalid request, showreel not found!", 404);
  res.json(formatContact(contact));
};

export {
  createContact,
  updateContact,
  deleteContact,
  getLatestContact,
  getSingleContact,
};
