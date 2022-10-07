const  mongoose  = require("mongoose");

require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL)
        .then(() => {
            console.log('db is connected')
        })
        .catch((ex) => {
            console.log('db connection failed', ex);
        });

