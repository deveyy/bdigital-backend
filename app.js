/**
 * @author ddthien.dev
 * @date 2022-10-06
 * @contact
 * @email thiendinh.dev@gmail.com
 */

const express = require('express');
const app = express();

const userRouter = require('./routes/user');


// MVC - Modal controller
app.use(userRouter);


app.get('/about', (req, res) => {
    res.send("<h1>About</h1>")
})

app.listen(8000, () => {
    console.log('the port is listening on port 8000')
})