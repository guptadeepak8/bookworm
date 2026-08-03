import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.middleware";
import router from "./routes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

app.use("/api/v1",router);

app.use(errorMiddleware);


app.get("/api/v1/health", (_, res) => {
  res.json({
    success: true,
    message: "API is running",
  });
});

export default app;