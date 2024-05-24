import { Contact } from "../models/contact.js";

export const contact = async (req, res) => {
  try {
    const { email, message } = req.body;

    const messageSend = await Contact.create({
      email,
      message,
    });

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
