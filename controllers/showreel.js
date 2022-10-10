import Showreel from "../models/showreel.js";
import { isValidObjectId } from "mongoose";
import {
  formatShowreel,
  sendError,
  uploadImageToCloud,
} from "../utils/helper.js";
import cloudinary from "../config/cloudinary.js";

const createShowreel = async (req, res) => {
  const { name, about, timeline, url } = req.body;
  const { file } = req;

  const newShowreel = new Showreel({ name, about, timeline, url });

  if (file) {
    const { url, public_id } = await uploadImageToCloud(file.path);
    newShowreel.avatar = { url, public_id };
  }
  await newShowreel.save();

  res.status(201).json(formatShowreel(newShowreel));
};

// update
// things to consider while updating
// no.1 - is image file is / avatar is also updating
// no.2 - if yes then remove old image before uploading new image / avatar

const updateShowreel = async (req, res) => {
  const { name, about, timeline, url } = req.body;
  const { file } = req;
  const { showreelId } = req.params;

  if (!isValidObjectId(showreelId)) {
    return sendError(res, "Invalid request");
  }
  const showreel = await Showreel.findById(showreelId);

  if (!showreel) {
    return sendError(res, "Invalid request, record not found!");
  }

  const public_id = showreel.avatar?.public_id;
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
    showreel.avatar = { url, public_id };
  }

  showreel.name = name;
  showreel.about = about;
  showreel.timeline = timeline;
  showreel.url = url;

  await showreel.save();

  res.status(201).json(formatShowreel(showreel));
};

const deleteShowreel = async (req, res) => {
  const { showreelId } = req.params;

  if (!isValidObjectId(showreelId)) return sendError(res, "Invalid request!");

  const showreel = await Showreel.findById(showreelId);
  if (!showreel) return sendError(res, "Invalid request, record not found!");

  const public_id = showreel.avatar?.public_id;

  // remove old image if there was one!
  if (public_id) {
    const { result } = await cloudinary.uploader.destroy(public_id);
    if (result !== "ok") {
      return sendError(res, "Could not remove image from cloud!");
    }
  }

  await Showreel.findByIdAndDelete(showreelId);

  res.json({ message: "Record removed successfully." });
};

const searchShowreel = async (req, res) => {
  const { query } = req;
  const result = await Showreel.find({ $text: { $search: `"${query.name}"` } });

  const showreels = result.map((showreel) => formatShowreel(showreel));

  res.json(showreels);
};

const getLatestShowreels = async (req, res) => {
  const result = await Showreel.find().sort({ createdAt: "-1" }).limit(12);

  const showreels = result.map((showreel) => formatShowreel(showreel));

  res.json(showreels);
};

const getSingleShowreel = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) return sendError(res, "Invalid request!");

  const showreel = await Showreel.findById(id);
  if (!showreel)
    return sendError(res, "Invalid request, showreel not found!", 404);
  res.json(formatShowreel(showreel));
};

export {
  createShowreel,
  updateShowreel,
  deleteShowreel,
  searchShowreel,
  getLatestShowreels,
  getSingleShowreel,
};
