/**
 * @author ddthien.dev
 * @contact
 * @email thiendinh.dev@gmail.com
 */

import mongoose from "mongoose";

const homeSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  url: {
    type: String,
    trim: true,
    required: true,
  },
});

export default mongoose.model("Home", homeSchema);
