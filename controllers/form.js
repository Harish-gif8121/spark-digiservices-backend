const { Sequelize } = require("sequelize");
const db = require("../models");    
// const dotenv = require("dotenv");
// dotenv.config();


const createform = async (req, res) => {
  try {
    let { name, email,phone_number,company,services,message } = req.body;
 
    // 1️⃣ Validation
    // if (!branch_name || !entity_id) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Branch name and entity_id are required",
    //   });
    // }
 
    
    // 4️⃣ Create branch
    const newtest = await db.form.create({
      name, email,phone_number,company,services,message
    });
 
    return res.status(201).json({
      success: true,
      message: "form created successfully",
      data: newtest,
    });
  } catch (error) {
    console.error("createForm error:", error);
  }
    return res.status(500).json({
      success: false,
      message: "Error in creating form",
    });
  }

 
 

module.exports = {
  createform,
};