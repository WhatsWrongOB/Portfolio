import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

const verifyToken = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    console.log(token)
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token not given",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user

    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default verifyToken;
