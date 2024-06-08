import express from "express";
import {
  getProject,
  addProject,
  deleteProject,
  updateProject,
} from "../controllers/project.js";
import verifyToken from "../utils/verifyToken.js";

export const projectRouter = express.Router();

projectRouter.route("/").get(getProject);
projectRouter.route("/").post( addProject);
projectRouter.route("/:id").delete( deleteProject);
projectRouter.route("/:id").patch( updateProject);
