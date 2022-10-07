const { check, validationResult } = require("express-validator");

//User
exports.userValidator = [
    // name
    check('name')
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is missing!"),
    //email
    check('email')
    .normalizeEmail()
    .isEmail()
    .withMessage("Email is in valid"),
    // password
    check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is missing!")
    .isLength({ min: 8, max: 20})
    .withMessage("Password must be 8 to 20 characters long!")
];

exports.validate = (req, res, next) => {
   const error =  validationResult(req).array();
   if(error.length) {
    return res.json({error: error[0].msg});
   }
   next();
}