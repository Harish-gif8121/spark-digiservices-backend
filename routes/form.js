const express = require("express");
const router = express.Router();
const { createform } = require("../controllers/form");


router.post("/create", createform);

module.exports = router;