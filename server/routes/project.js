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
projectRouter.route("/").post(verifyToken, addProject);
projectRouter.route("/:id").delete(verifyToken, deleteProject);
projectRouter.route("/:id").patch(verifyToken, updateProject);
