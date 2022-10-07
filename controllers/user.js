const User = require('../models/user');
const EmailVerificationToken = require("../middlewares/emailVerificationToken");
const nodemailer = require('nodemailer');

require('dotenv').config()

const create = async (req, res) => {
   const { name, email, password} = req.body;
   
   const oldUser = await User.findOne({email});
   if(oldUser) 
   return res.status(401).json({error: "This email is already in use"})

   const newUser = new User({ name, email, password})
   await newUser.save();

   // generate 6 digit otp
   let OTP = '';
   for(let i = 0; i <= 5; i++) {
     const randomVal = Math.round(Math.random() * 9);
     OTP += randomVal 
   }
   // store otp inside our db
   const newEmailVerificationToken = new EmailVerificationToken({
      owner: newUser._id,
      token: OTP
   });
   await newEmailVerificationToken.save(); 
   // send that otp to our user
   var transport = nodemailer.createTransport({
      host: process.env.host,
      port: process.env.port,
      auth: {
        user: process.env.user,
        pass: process.env.password
      }
    });
    // send mail
   transport.sendMail({
      from: 'biosweb@asifboot.com',
      to: newUser.email,
      subject: 'Email Verification',
      html: `
         <p>Your verification OTP</p>
         <h1>${OTP}</h1>
      `
   })

   res
   .status(201)
   .json({ 
      message: 'Please verify your email. OTP has been sent to your email account!'});
}

module.exports =  {create};