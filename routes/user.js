/**
 * @author ddthien.dev
 * @date 2022-10-07
 * @contact
 * @email thiendinh.dev@gmail.com
 */

import  express from "express";
import jwt, { decode } from 'jsonwebtoken'

import {
  create,
  verifyEmail,
  resendEmailVerificationToken,
  forgetPassword,
  sendResetPasswordTokenStatus,
  resetPassword,
  signIn
} from "../controllers/user.js";
import { isValidPassResetToken } from "../middlewares/user.js";
import {
  userValidator,
  validate,
  validatePassword,
  signInValidator
} from "../middlewares/validator.js";

import { isAuth } from "../middlewares/auth.js";

import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'Too many requests from this IP, please try again after 15 minutes',
});

const router = express.Router();

router.post("/sign-in", signInValidator, validate, signIn, apiLimiter);

router.post("/create", userValidator, validate, create, apiLimiter);
router.post("/verify-email", verifyEmail);
router.post("/resend-email-verification-token", resendEmailVerificationToken);
router.post("/forget-password", forgetPassword);
router.post(
  "/verify-pass-reset-token",
  isValidPassResetToken,
  sendResetPasswordTokenStatus
);
router.post(
  "/reset-password",
  validatePassword,
  validate,
  isValidPassResetToken,
  resetPassword
);

router.get("/is-auth", isAuth, (req, res) => {
  const { user } = req;
  res.json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      isVerified: user.isVerified,
    },
  });
});

export default router;
