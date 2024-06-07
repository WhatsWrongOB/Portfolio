import mongoose from "mongoose";
import { Contact } from "../models/contact.js";
import { myCache } from "../server.js";

export const getContact = async (req, res) => {
  try {
    let messages;

    if (myCache.has("messages")) messages = JSON.parse(myCache.get("messages"));
    else {
      messages = await Contact.find();
      myCache.set("messages", JSON.stringify(messages));
    }

    return res.status(200).json({
      success: true,
      message: "Message send successfully",
      messages,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Message not delivered",
    });
  }
};

export const contact = async (req, res) => {
  try {
    const { email, message } = req.body;

    await Contact.create({
      email,
      message,
    });

    myCache.del("messages");

    return res.status(200).json({
      success: true,
      message: "Message send successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Message not delivered",
    });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: `No contact with id ${id}`,
      });
    }

    await Contact.findByIdAndDelete(id);

    myCache.del("messages");

    return res.status(200).json({
      success: true,
      message: "Message deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
