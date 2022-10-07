/**
 * @author ddthien.dev
 * @date 2022-10-07
 * @contact
 * @email thiendinh.dev@gmail.com
 */

import  mongoose  from "mongoose";

const connectDB = (url) => {
    return mongoose.connect(url)
  }

export default connectDB
