import Showreel from "../models/showreel.js";
import { isValidObjectId } from "mongoose";
import {
  formatShowreel,
  sendError,
  uploadImageToCloud,
} from "../utils/helper.js";

const createShowreel = async (req, res) => {
  const { name, about, timeline, embedId } = req.body;

  const newShowreel = new Showreel({ name, about, timeline, embedId });

  await newShowreel.save();

  res.status(201).json(formatShowreel(newShowreel));
};

// update
// things to consider while updating
// no.1 - is image file is / avatar is also updating
// no.2 - if yes then remove old image before uploading new image / avatar

const updateShowreel = async (req, res) => {
  const { name, about, timeline, embedId } = req.body;
  const { showreelId } = req.params;

  if (!isValidObjectId(showreelId)) {
    return sendError(res, "Invalid request");
  }
  const showreel = await Showreel.findById(showreelId);

  if (!showreel) {
    return sendError(res, "Invalid request, record not found!");
  }

  showreel.name = name;
  showreel.about = about;
  showreel.timeline = timeline;
  showreel.embedId = embedId;

  await showreel.save();

  res.status(201).json(formatShowreel(showreel));
};

const deleteShowreel = async (req, res) => {
  const { showreelId } = req.params;

  if (!isValidObjectId(showreelId)) return sendError(res, "Invalid request!");

  const showreel = await Showreel.findById(showreelId);
  if (!showreel) return sendError(res, "Invalid request, record not found!");

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
