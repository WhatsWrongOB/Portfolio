import express from 'express'
import { getProject, addProject, deleteProject } from '../controllers/project.js'

export const projectRouter = express.Router();

projectRouter.route("/get").get(getProject);
projectRouter.route("/add").post(addProject);
projectRouter.route("/delete/:id").delete(deleteProject);
