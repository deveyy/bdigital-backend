/**
 * @author ddthien.dev
 * @date 2022-10-06
 * @contact
 * @email thiendinh.dev@gmail.com
 */

const express = require('express')
const app = express();

require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hi Bdigital Bot Server start')
})

const port = process.env.PRORT || 8000


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});