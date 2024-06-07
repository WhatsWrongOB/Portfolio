import express from "express";
import { contact, deleteContact, getContact } from "../controllers/contact.js";
import verifyToken from "../utils/verifyToken.js";

export const contactRouter = express.Router();

contactRouter.route("/send").post(contact);
contactRouter.route("/get").get(verifyToken, getContact);
contactRouter.route("/delete/:id").delete(verifyToken,deleteContact);
