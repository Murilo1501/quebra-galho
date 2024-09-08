const models = require("../models")

class ProjectController{

    static async store(req,res){
        let { title, description, image, wage } = req.body;
        const {id} = req.body

        try {
          
            const user = await models.User.findByPk(id)

            if(!user){
                return res.status(404).json("user not found")
            }

            const newProject = await models.Project.create({
                title,
                description,
                image,
                wage,
                id_ownerProject: id
            })

            return res.status(201).json("projeto cadastrado com sucesso");  

        } catch (error) {
            
        }
    }

    static async index(req,res){
        const {id} = req.params


        try {
            
            const user = await models.User.findByPk(id)

            if(!user){
                return res.status(404).send("user not found")
            }
            const projects = await models.Project.findAll({
                where:{
                    id_ownerProject:id
                }
            })

            return res.status(200).json(projects)
            
        } catch (error) {
            
        }
    }

    static async update(){

    }

    static async destroy(){

    }
}

module.exports = ProjectController