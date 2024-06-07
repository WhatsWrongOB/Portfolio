import express from "express";
import {
  getProject,
  addProject,
  deleteProject,
  updateProject,
} from "../controllers/project.js";
import verifyToken from "../utils/verifyToken.js";

export const projectRouter = express.Router();

projectRouter.route("/get").get(getProject);
projectRouter.route("/add").post(verifyToken, addProject);
projectRouter.route("/delete/:id").delete(verifyToken, deleteProject);
projectRouter.route("/update/:id").patch(verifyToken, updateProject);
