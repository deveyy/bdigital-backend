/**
 * @author ddthien.dev
 * @date 2022-10-06
 * @contact
 * @email thiendinh.dev@gmail.com
 */

const express = require('express');
require("express-async-errors");
const morgan = require("morgan");
const { errorHandler } = require("./middlewares/error");

require("dotenv").config();

//connect db
require('./db');

const userRouter = require('./routes/user');

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use('/api/user',userRouter);

app.use(errorHandler);


app.listen(process.env.PORT, () => {
    console.log('The port is listening on port 8000')
})
