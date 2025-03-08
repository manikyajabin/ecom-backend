const express = require("express");
const { checkout } = require("../controllers/paymentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/", authMiddleware, checkout);

module.exports = router;
