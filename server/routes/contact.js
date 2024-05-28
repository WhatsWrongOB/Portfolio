import express from "express";
import { contact, getContact } from "../controllers/contact.js";

export const contactRouter = express.Router();

contactRouter.route("/send").post(contact);
contactRouter.route("/get").post(getContact);

