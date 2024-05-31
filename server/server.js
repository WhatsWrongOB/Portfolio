import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDatabase } from "./config/database.js";
import { userRouter } from "./routes/auth.js";
import { projectRouter } from "./routes/project.js";
import { contactRouter } from "./routes/contact.js";

const app = express();

dotenv.config({ path: "./config/config.env" });

const allowedOrigins = [
  "https://syedhashir-portfolio.netlify.app",
  "http://localhost:3000",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  credentials: true,
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.use("/auth", userRouter);
app.use("/project", projectRouter);
app.use("/contact", contactRouter);

app.use("/", (req, res) => {
  res.send("Server working");
});

const PORT = process.env.PORT || 3000;

connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Running on the Port http://localhost:${PORT}/`);
  });
});

app.use((err, req, res, next) => {
  if (err instanceof Error && err.message.includes("Not allowed by CORS")) {
    res.status(403).json({ message: "CORS error: Access denied" });
  } else {
    next(err);
  }
});