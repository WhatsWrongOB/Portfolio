import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import NodeCache from "node-cache";
import { connectDatabase } from "./config/database.js";
import { userRouter } from "./routes/auth.js";
import { projectRouter } from "./routes/project.js";
import { contactRouter } from "./routes/contact.js";

dotenv.config({ path: "./config/config.env" });

export const myCache = new NodeCache();
const app = express();

// CORS configuration
const corsOptions = {
  origin: "*", 
  methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  credentials: true,
};
app.use(cors(corsOptions));


// Middleware
app.use(cookieParser());
app.use(express.json());


// Routes
app.use("/auth", userRouter);
app.use("/project", projectRouter);
app.use("/contact", contactRouter);


// Default route
app.use("/", (req, res) => {
  res.send("Server working");
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof Error && err.message.includes("Not allowed by CORS")) {
    res.status(403).json({ message: "CORS error: Access denied" });
  } else {
    next(err);
  }
});

const PORT = process.env.PORT || 3000;

// Connect to database and start server
connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Running on Port http://localhost:${PORT}/`);
  });
});
