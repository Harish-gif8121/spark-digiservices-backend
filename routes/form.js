const express = require("express");
const router = express.Router();

const { createform, getAllForms } = require("../controllers/form");

router.post("/create", createform);
router.get("/get-all", getAllForms);

module.exports = router; 