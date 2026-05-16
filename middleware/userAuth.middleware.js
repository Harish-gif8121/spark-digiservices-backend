const jwt = require('jsonwebtoken')

const authenticateJWT = (req,res,next)=>{
    try{
   const token = (req.headers?.authorization || " ").split(" ")[1];
    if(!token){
      return res.status(401).json({
        success:false,
        message:"unauthorized:token missing",

      })
    } 
     const decoded = jwt.verify(token,process.env.JWT_SECRET);
     req.user = {
        id:decoded.id,
        email:decoded.email,
     }
     next();
    }
    catch(err){
        return res.status(498).json({
            isInvalidToken: true,
      message: "Invalid or expired token",
        })
    }
    

     

}

module.exports = authenticateJWT