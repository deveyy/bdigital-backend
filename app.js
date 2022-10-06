/**
 * @author ddthien.dev
 * @date 2022-10-06
 * @contact
 * @email thiendinh.dev@gmail.com
 */

const express = require('express');
require('dotenv').config();

// mongose
const mongose = require('mongoose');

// config bunyan
const bunyan = require('bunyan');
const log = bunyan.createLogger({
    name: 'app-bdigital',
    serializers: bunyan.stdSerializers,
    level: "debug"
});

// app
const app = express();

const port = process.env.PORT || 8000

//db
const URL_DB = process.env.DATABASE;

// import routes
const userRoutes = require('./routes/user');

try {
    mongose.connect(URL_DB, {
        useNewUrlParser: true,
        // bug MongoParseError: option usecreateindex is not supported is ver mongosee > 6
       // useCreateIndex: true
        useUnifiedTopology: true,
    }).then(() => {
        log.info('Database Connected To MongoDB!!');
    })
} catch (error) {
        log.info(error, "Server error, try again");
}

// routes middleware
app.use("/api/v1", userRoutes);


app.listen(port, () => {
    log.info(`Server is running on port ${port}`);
});