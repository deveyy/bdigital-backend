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

// app
const app = express();

//db
const url_db = process.env.DATABASE;

mongose.connect(url_db, {
    useNewUrlParser: true,
    // bug MongoParseError: option usecreateindex is not supported is ver mongosee > 6
   // useCreateIndex: true
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB Connected');
})


//routes
app.get('/', (req, res) => {
    res.send('Hi Bdigital Bot Server start')
})

const port = process.env.PRORT || 8000


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});