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

export const getContact = async (req, res) => {
  try {
    const messages = await Contact.find();

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
