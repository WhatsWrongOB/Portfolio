import express from "express";
import {
  getProject,
  addProject,
  deleteProject,
  updateProject,
} from "../controllers/project.js";

export const projectRouter = express.Router();

projectRouter.route("/").get(getProject);
projectRouter.route("/").post(addProject);
projectRouter.route("/:id").delete(deleteProject);
projectRouter.route("/:id").patch(updateProject);
