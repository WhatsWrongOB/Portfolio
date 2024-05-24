import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Contact = mongoose.model("Contact", contactSchema);
