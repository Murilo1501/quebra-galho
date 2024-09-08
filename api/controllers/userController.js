const models = require("../models")

class UserController{
    static async store(req,res){
        const data = req.body;

        try {
            const newUser = await models.User.create(data)
            res.status(201).send("usuário cadastrado com sucesso")
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req,res){
        const {id} =  req.params;
        const {updates} = req.body

        try {
            const updated = await models.User.update(updates,{
                where:{
                    id:id
                }
            })

            return res.status(200).send(updated)
        } catch (error) {
            
        }
    }

    static async destroy(req,res){

        const {id} = req.params;


        try {
                await models.User.destroy({
                    where:{
                        id:id
                    }
                })    


                return res.status(200).send("user deleted")
        } catch (error) {

        }
    }

    static async index(req,res){

        const {id} = req.params;

        try {
            const data = await models.User.findAll({
                where:{
                    id:id
                }
            })            

            return res.status(200).send(data)
        } catch (error) {
            
        }
    }
}

module.exports = UserController