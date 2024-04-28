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
}

module.exports = UserController