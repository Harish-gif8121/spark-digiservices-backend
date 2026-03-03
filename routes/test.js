const express = require("express");
const router = express.Router();
const { createTest } = require("../controllers/testdb");


router.post("/create", createTest);

module.exports = router;