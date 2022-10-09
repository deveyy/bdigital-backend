/**
 * @author ddthien.dev
 * @date 2022-10-08
 * @contact
 * @email thiendinh.dev@gmail.com
 */

import mongoose from "mongoose";

const actorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    about: {
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      trim: true,
      required: true,
    },
    avatar: {
      type: Object,
      url: String,
      public_id: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
//search actor
actorSchema.index({ name: "text" });

export default mongoose.model("Actor", actorSchema);
