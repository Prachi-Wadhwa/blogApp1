const express = require("express");
const {
  getAllUsers,
  registeredController,
  loginController,
} = require("../controllers/userController");

const router = express.Router();

router.get("/all-users", getAllUsers);

router.post("/register", registeredController);

router.post("/login", loginController);

module.exports = router;
