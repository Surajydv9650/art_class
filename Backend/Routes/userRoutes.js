const express = require("express");
const {
  addUser,
  authUser,
  addContact,
} = require("../Controllers/UserController");

const router = express.Router(); // It's common to use lowercase for 'router'

router.post("/add-user", addUser);
router.post("/auth-user", authUser);
router.post("/add-lead", addContact);
module.exports = router;
