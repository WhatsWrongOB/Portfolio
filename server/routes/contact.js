import express from "express";
import { contact, deleteContact, getContact } from "../controllers/contact.js";
import verifyToken from "../utils/verifyToken.js";

export const contactRouter = express.Router();

contactRouter.route("/").post(contact);
contactRouter.route("/").get(getContact);
contactRouter.route("/:id").delete(deleteContact);
