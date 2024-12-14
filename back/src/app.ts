import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import v1 from "./routes/v1";
import { CORS_URL } from "./config";
import { AppDataSource } from "./data-source";
dotenv.config();

// EXPRESS CONFIG
export const app = express();
app.use(
  cors({
    origin: CORS_URL,
    optionsSuccessStatus: 200,
  })
);
app.use(json({ limit: "10mb" }));

// ROUTES
app.use("/v1", v1);

// DB INIT
AppDataSource.initialize()
  .then(() => {
    console.log("Database initialized");
  })
  .catch((error) =>
    console.error("Error during Data Source initialization:", error)
  );
