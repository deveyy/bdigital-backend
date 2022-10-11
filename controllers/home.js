import { isValidObjectId } from "mongoose";
import Home from "../models/home.js";
import { formatHome, sendError, uploadImageToCloud } from "../utils/helper.js";

const createHome = async (req, res) => {
  const { title, url } = req.body;
  const newHome = new Home({ title, url });
  await newHome.save();
  res.status(201).json(formatHome(newHome));
};

const updateHome = async (req, res) => {
  const { title, url } = req.body;
  const { homeId } = req.params;

  if (!isValidObjectId(homeId)) {
    return sendError(res, "Invalid request");
  }

  const home = await Home.findById(homeId);
  if (!home) {
    return sendError(res, "Invalid request, record not found!");
  }

  home.title = title;
  home.url = url;

  await home.save();
  res.status(201).json(formatHome(home));
};

const deleteHome = async (req, res) => {
  const { homeId } = req.params;

  if (!isValidObjectId(homeId)) return sendError(res, "Invalid request!");

  const home = await Home.findById(homeId);
  if (!home) return sendError(res, "Invalid request, record not found!");

  await Home.findByIdAndDelete(homeId);

  res.json({ message: "Record removed successfully." });
};

const getLatestHome = async (req, res) => {
  const result = await Home.find().sort({ createdAt: "-1" }).limit(12);

  const homes = result.map((home) => formatHome(home));

  res.json(homes);
};

const getSingleHome = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) return sendError(res, "Invalid request!");

  const home = await Home.findById(id);
  if (!home) return sendError(res, "Invalid request, showreel not found!", 404);
  res.json(formatHome(home));
};

export { createHome, updateHome, deleteHome, getLatestHome, getSingleHome };
