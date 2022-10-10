/**
 * @author ddthien.dev
 * @contact
 * @email thiendinh.dev@gmail.com
 */

import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  title: {
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
  phone: {
    type: String,
    trim: true,
    required: true,
  },
});

export default mongoose.model("Contact", contactSchema);
