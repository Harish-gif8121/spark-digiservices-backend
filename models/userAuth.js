const { DataTypes, STRING } = require("sequelize");

module.exports = (sequelize,DataTypes)=>{
    const userAuth = sequelize.define("userAuth",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        email:{
            type:DataTypes.STRING,
           allowNull:true
        },
         password:{
            type:DataTypes.STRING,
           allowNull:true
        },
        role:{
            type:DataTypes.STRING,
           allowNull:true
        },
        createdAt:{
            type: DataTypes.DATE,
        },
         updatedAt:{
            type: DataTypes.DATE,
        },


    },{
        freezeTableName:true,
        timestamps:true
    })
    return userAuth;
}