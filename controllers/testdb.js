const { Sequelize } = require("sequelize");
const db = require("../models/testdb");    
// const dotenv = require("dotenv");
// dotenv.config();


const createTest = async (req, res) => {
  try {
    let { name, email,phone_number } = req.body;
 
    // 1️⃣ Validation
    // if (!branch_name || !entity_id) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Branch name and entity_id are required",
    //   });
    // }
 
    
    // 4️⃣ Create branch
    const newtest = await db.test.create({
      name, email,phone_number
    });
 
    return res.status(201).json({
      success: true,
      message: "Branch created successfully",
      data: newtest,
    });
  } catch (error) {
    console.error("createBranch error:", error);
 
    return res.status(500).json({
      success: false,
      message: "Error in creating branch",
    });
  }
};
 
 

module.exports = {
  createTest,
};