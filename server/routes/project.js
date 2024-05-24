import express from "express";
import {
  getProject,
  addProject,
  deleteProject,
  updateProject,
} from "../controllers/project.js";

export const projectRouter = express.Router();

projectRouter.route("/get").get(getProject);
projectRouter.route("/add").post(addProject);
projectRouter.route("/delete/:id").delete(deleteProject);
projectRouter.route("/update/:id").patch(updateProject);

