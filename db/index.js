const  mongoose  = require("mongoose");

const DATABASE_URL = 'mongodb://localhost:27017/bdigital'

mongoose.connect(DATABASE_URL)
        .then(() => {
            console.log('db is connected')
        })
        .catch((ex) => {
            console.log('db connection failed', ex);
        });

