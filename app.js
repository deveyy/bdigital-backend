/**
 * @author ddthien.dev
 * @date 2022-10-06
 * @contact
 * @email thiendinh.dev@gmail.com
 */

import express from "express";
import "express-async-errors";
import morgan from "morgan";
import * as dotenv from "dotenv";

import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import cors from "cors";

import { errorHandler } from "./middlewares/error.js";

dotenv.config();

//connect db
import connectDB from "./db/index.js";

//routes
import userRouter from "./routes/user.js";
import actorRouter from "./routes/actor.js";
import movieRouter from "./routes/movie.js";

//helper
import { handleNotFound } from "./utils/helper.js";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(cors());
app.use(mongoSanitize());
app.use(errorHandler);

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/api/user", userRouter);
app.use("/api/actor", actorRouter);
app.use("/api/movie", movieRouter);

app.use("/*", handleNotFound);

app.use(errorHandler);

//port
const port = process.env.PORT || 5000;

//server
const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
