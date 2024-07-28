const express = require("express");
const router = express.Router();
const authController = require("../../controllers/ngo/auth.controller.js");
const USER_ROLE = require("../../utils/userRole.js");
const auth = require("../../middleware/authMiddleware.js");

/* GET users listing. */
router.post("/signup", authController.signUp);
router.post("/login", authController.loginUser);
router.post("/logout", authController.logoutUser);
router.post("/refreshToken", authController.refreshToken);
router.get("/", auth(USER_ROLE.ADMIN), authController.getAllUsers);

module.exports = router;
