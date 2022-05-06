import express from "express";
import { protect } from "../middlewares/protectedRoute";

import {
    userInfo,
    changeUsername,
    changeEmail,
    checkUsername,
  } from "../controllers/users";
  import {
    signup,
    login,
    initiateResetPassword,
    authenticateResetCode,
    resetNewPassword,
  } from "../controllers/auth";

export const router = express.Router();

router.route("/check-username").get(protect, checkUsername);
router.route("/user-info").get(protect, userInfo);
router.route("/initiate-reset-password").post(initiateResetPassword);
router.route("/authenticate-reset-code").post(authenticateResetCode);
router.route("/change-username").post(protect, changeUsername);
router.route("/change-email").post(protect, changeEmail);
router.route("/reset-password").post(resetNewPassword);
router.route("/signup").post(signup);
router.route("/login").post(login);
