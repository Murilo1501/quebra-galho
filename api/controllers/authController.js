const { where } = require("sequelize");
const models = require("../models")
const {sign} = require('jsonwebtoken') 
const Jsonsecret = require('./../../config/jsonSecret')

class AuthController{

    static async  auth(req,res){
        try {
           
            const data = req.body;
            
            const user = await models.User.findOne({
                attributes:['id','email','password'],
                where:{
                    email:data.email
                }
            })

            if(data.password != user.password){
                throw new Error("Usuario ou senha inválidos")
            }

            const accesToken = sign({
                id:user.id,
                email:user.email
            },Jsonsecret.secret,{
               expiresIn:86400 
            })

            res.send({accesToken})


        } catch (error) {
            res.status(500).send(error)
        }
    }
}

module.exports = AuthController;