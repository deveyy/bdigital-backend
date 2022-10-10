/**
 * @author ddthien.dev
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
import connectDB from "./database/index.js";

//routes
import userRouter from "./routes/user.js";
import showreelRouter from "./routes/showreel.js";
import homeRouter from "./routes/home.js";
import contactRouter from "./routes/contact.js";

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
app.use("/api/showreel", showreelRouter);
app.use("/api/home", homeRouter);
app.use("/api/contact", contactRouter);

app.use("/*", handleNotFound);

app.use(errorHandler);

//port
const port = process.env.PORT || 8000;

//server
const start = async () => {
  try {
    connectDB();
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
