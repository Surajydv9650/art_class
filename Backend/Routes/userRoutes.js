const express = require("express");
const {
  addUser,
  authUser,
  addContact,
  addEnrollment,
  forgetPassword,
  verifyOTP,
  resetPassword,
} = require("../Controllers/UserController");

const router = express.Router(); // It's common to use lowercase for 'router'

router.post("/add-user", addUser);
router.post("/auth-user", authUser);
router.post("/add-lead", addContact);
router.post("/enroll-user", addEnrollment);
router.post("/forget-password", forgetPassword);
router.post("/verify-otp", verifyOTP);
router.post("/reset-password",resetPassword)
module.exports = router;
