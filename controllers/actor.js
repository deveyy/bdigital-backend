import Actor from "../models/actor.js";
import { isValidObjectId } from "mongoose";
import { formatActor, sendError, uploadImageToCloud } from "../utils/helper.js";
import cloudinary from "../config/cloudinary.js";

const createActor = async (req, res) => {
  const { name, about, gender } = req.body;
  const { file } = req;

  const newActor = await new Actor({ name, about, gender });

  if (file) {
    const { url, public_id } = await uploadImageToCloud(file.path);
    newActor.avatar = { url, public_id };
  }
  await newActor.save();

  res.status(201).json(formatActor(newActor));
};

// update
// things to consider while updating
// no.1 - is image file is / avatar is also updating
// no.2 - if yes then remove old image before uploading new image / avatar

const updateActor = async (req, res) => {
  const { name, about, gender } = req.body;
  const { file } = req;
  const { actorId } = req.params;

  if (!isValidObjectId(actorId)) {
    return sendError(res, "Invalid request");
  }
  const actor = await Actor.findById(actorId);

  if (!actor) {
    return sendError(res, "Invalid request, record not found!");
  }

  const public_id = actor.avatar?.public_id;
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
    actor.avatar = { url, public_id };
  }

  actor.name = name;
  actor.about = about;
  actor.gender = gender;

  await actor.save();

  res.status(201).json(formatActor(actor));
};

const deleteActor = async (req, res) => {
  const { actorId } = req.params;

  if (!isValidObjectId(actorId)) return sendError(res, "Invalid request!");

  const actor = await Actor.findById(actorId);
  if (!actor) return sendError(res, "Invalid request, record not found!");

  const public_id = actor.avatar?.public_id;

  // remove old image if there was one!
  if (public_id) {
    const { result } = await cloudinary.uploader.destroy(public_id);
    if (result !== "ok") {
      return sendError(res, "Could not remove image from cloud!");
    }
  }

  await Actor.findByIdAndDelete(actorId);

  res.json({ message: "Record removed successfully." });
};

export { createActor, updateActor, deleteActor };
