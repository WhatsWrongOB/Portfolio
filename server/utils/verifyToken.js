import { User } from "../models/user.js";

const verifyToken = (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      res.status(400).json({
        success: false,
        message: "Admin access only",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default verifyToken;
