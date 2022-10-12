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
  facebook: {
    type: String,
    trim: true,
  },
  youtube: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
});

export default mongoose.model("Contact", contactSchema);
