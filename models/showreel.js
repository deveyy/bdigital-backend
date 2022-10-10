/**
 * @author ddthien.dev
 * @contact
 * @email thiendinh.dev@gmail.com
 */

import mongoose from "mongoose";

const showreelSchema = mongoose.Schema(
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
    url: {
      type: String,
      trim: true,
      required: true,
    },
    timeline: {
      type: String,
      trim: true,
      required: true,
    },
    avatar: {
      type: Object,
      url: String,
      public_id: String,
    },
  },
  { timestamps: true }
);
//search showreel
showreelSchema.index({ name: "text" });

export default mongoose.model("Showreel", showreelSchema);
