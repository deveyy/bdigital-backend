/**
 * @author ddthien.dev
 * @date 2022-10-07
 * @contact
 * @email thiendinh.dev@gmail.com
 */

import { check, validationResult } from "express-validator";

//User
const userValidator = [
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

const validatePassword = [
    check("newPassword")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Password is missing!")
      .isLength({ min: 8, max: 20 })
      .withMessage("Password must be 8 to 20 characters long!"),
];

const signInValidator = [
    check("email").normalizeEmail().isEmail().withMessage("Email is invalid!"),
    check("password").trim().not().isEmpty().withMessage("Password is missing!"),
];

const validate = (req, res, next) => {
   const error =  validationResult(req).array();
   if(error.length) {
    return res.json({error: error[0].msg});
   }
   next();
}

export { userValidator, validatePassword, signInValidator, validate}