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
    embedId: {
      type: String,
      trim: true,
      required: true,
    },
    timeline: {
      type: String,
      trim: true,
      required: true,
    }
  },
  { timestamps: true }
);
//search showreel
showreelSchema.index({ name: "text" });

export default mongoose.model("Showreel", showreelSchema);
