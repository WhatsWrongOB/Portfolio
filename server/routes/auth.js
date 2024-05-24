import express from "express";
import { login, register, logout } from "../controllers/auth.js";

export const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route("/register").post(register);
userRouter.route("/logout").get(logout);
