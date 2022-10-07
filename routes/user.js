const express = require("express");
const {
  create,
  verifyEmail,
  resendEmailVerificationToken,
  forgetPassword,
  sendResetPasswordTokenStatus,
  resetPassword,
  signIn
} = require("../controllers/user");
const { isValidPassResetToken } = require("../middlewares/user");
const {
  userValidator,
  validate,
  validatePassword,
  signInValidator
} = require("../middlewares/validator");

const rateLimiter = require('express-rate-limit');

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

module.exports = router;
