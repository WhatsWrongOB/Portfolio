import express from 'express'
import {contact} from '../controllers/contact.js'

export const contactRouter = express.Router();

contactRouter.route("/send").post(contact);
