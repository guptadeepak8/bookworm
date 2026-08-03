import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

app.get("/api/v1/health", (_, res) => {
  res.json({
    success: true,
    message: "API is running",
  });
});

export default app;