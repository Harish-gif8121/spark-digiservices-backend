
const db = require("../models/index")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const  registerUser = async(req,res)=>{
    try{
    const {email ,password} = req.body;
    const existingUser = await db.userAuth.findOne({
        where:{email}
    })
     if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }
 
    const hashedPassword = await bcrypt.hash(password,10);

    const createUser = await db.userAuth.create({
        email,password:hashedPassword,
        role:"user",
       
    })

    return res.status(201).json({
      success: true,
      message: "User registered",
    });
    }
    catch(error){
        console.error(error);
     return res.status(500).json({
        
      success: false,
      message: "Registration failed",
    });
    }
}
const loginUser = async(req , res) =>{
    try{
    const {email,password} = req.body;

    const user = await db.userAuth.findOne({
        where:{email}
    })
    if(!user){
        return res.status(404).json({
            success:false,
            message:"user not found"
        })
    }
    const isPasswordValid = await bcrypt.compare(
        password,
        user.password
    )

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const payload = {
        id:user.id,
        email:user.email
    }
    console.log(process.env.JWT_SECRET,"process.env.JWT_SECRET")
    const token = jwt.sign(payload,process.env.JWT_SECRET,{ expiresIn: '72h' })

    return res.status(200).json({
        success:true,
        message:"login successful",
        token:token
    })


    }
    catch(err){
      console.error("loginUser error:", err);
      return res.status(500).json({
        success: false,
        message: "Error logging in user",
      });
    }
}

const logoutUser = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error("logoutUser error:", error);

    return res.status(500).json({
      success: false,
      message: "Error logging out user",
    });
  }
};

module.exports = {loginUser,registerUser,logoutUser}