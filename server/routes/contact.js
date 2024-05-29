import express from "express";
import { contact, deleteContact, getContact } from "../controllers/contact.js";

export const contactRouter = express.Router();

contactRouter.route("/send").post(contact);
contactRouter.route("/get").get(getContact);
contactRouter.route("/delete/:id").delete(deleteContact);
