import { isValidObjectId } from "mongoose";
import Home from "../models/home.js";
import { formatHome, sendError, uploadImageToCloud } from "../utils/helper.js";
import cloudinary from "../config/cloudinary.js";

const createHome = async (req, res) => {
  const { title, url } = req.body;
  const { file } = req;
  const newHome = new Home({ title, url });
  if (file) {
    const { url, public_id } = await uploadImageToCloud(file.path);
    newHome.image = { url, public_id };
  }
  await newHome.save();
  res.status(201).json(formatHome(newHome));
};

const updateHome = async (req, res) => {
  const { title, url } = req.body;
  const { file } = req;
  const { homeId } = req.params;

  if (!isValidObjectId(homeId)) {
    return sendError(res, "Invalid request");
  }

  const home = await Home.findById(homeId);
  if (!home) {
    return sendError(res, "Invalid request, record not found!");
  }

  const public_id = home.image?.public_id;
  // remove old image if there was one!
  if (public_id && file) {
    const { result } = await cloudinary.v2.uploader.destroy(public_id);
    if (result !== "ok") {
      return sendError(res, "Cloud not remove image from cloud!");
    }
  }
  // upload new avatar if there is one!
  if (file) {
    const { url, public_id } = await uploadImageToCloud(file.path);
    home.image = { url, public_id };
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

  const public_id = home.image?.public_id;

  // remove old image if there was one!
  if (public_id) {
    const { result } = await cloudinary.uploader.destroy(public_id);
    if (result !== "ok") {
      return sendError(res, "Could not remove image from cloud!");
    }
  }

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
