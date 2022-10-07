/**
 * @author ddthien.dev
 * @date 2022-10-07
 * @contact
 * @email thiendinh.dev@gmail.com
 */

import { isValidObjectId } from "mongoose";
import PasswordResetToken  from "../models/passwordResetToken.js";
import  { sendError }  from "../utils/helper.js";

const isValidPassResetToken = async (req, res, next) => {
  const { token, userId } = req.body;

  if (!token.trim() || !isValidObjectId(userId))
    return sendError(res, "Invalid request!");

  const resetToken = await PasswordResetToken.findOne({ owner: userId });
  if (!resetToken)
    return sendError(res, "Unauthorized access, invalid request!");

  const matched = await resetToken.compareToken(token);
  if (!matched) return sendError(res, "Unauthorized access, invalid request!");

  req.resetToken = resetToken;
  next();
};

export  {isValidPassResetToken} 