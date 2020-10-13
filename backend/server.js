import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./middlewares/error";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import { connectDB } from "./database";

const app = express();
dotenv.config();

connectDB();

const port = process.env.PORT || 8000;

app.use(express.json({ extended: true }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/api", authRoutes, userRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`server is running on ${port} port`));
