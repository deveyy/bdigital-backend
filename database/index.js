/**
 * @author ddthien.dev
 * @date 2022-10-07
 * @contact
 * @email thiendinh.dev@gmail.com
 */

import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

export default () => {
  const connect = () => {
    mongoose
      .connect(`${process.env.DATABASE_URL}`)
      .then(() => {
        console.log("Successfully connected to database.");
      })
      .catch((error) => {
        console.log("Error connecting to database", error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on("disconnected", connect);
};
