const db = require("../models");    

// CREATE
const createform = async (req, res) => {
  try {
    const { name, email, phone_number, company, services, message,source } = req.body;

    const newForm = await db.form.create({
      name,
      email,
      phone_number,
      company,
      services,
      message,
      source
    });

    return res.status(201).json({
      success: true,
      message: "Form created successfully",
      data: newForm,
    });

  } catch (error) {
    console.error("createForm error:", error);
    return res.status(500).json({
      success: false,
      message: "Error creating form",
    });
  }
};

// GET ALL
const getAllForms = async (req, res) => {
  try {
    const forms = await db.form.findAll();

    return res.status(200).json({
      success: true,
      data: forms,
    });

  } catch (error) {
    console.error("getAllForms error:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching forms",
    });
  }
};

// ✅ EXPORT BOTH
module.exports = {
  createform,
  getAllForms,
};