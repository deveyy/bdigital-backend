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
const URL_DB = process.env.DATABASE;

try {
    mongose.connect(URL_DB, {
        useNewUrlParser: true,
        // bug MongoParseError: option usecreateindex is not supported is ver mongosee > 6
       // useCreateIndex: true
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Database Connected To MongoDB!!');
    })
} catch (error) {
    console.log(error, "Server error, try again");
}



//routes
app.get('/', (req, res) => {
    res.send('Hi Bdigital Bot Server start')
})

const port = process.env.PRORT || 8000


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});