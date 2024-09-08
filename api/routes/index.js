const bodyParser = require('body-parser')
const usersRoute = require('./usersRoute')
const projectsRoute = require('./projectsRoute')
const authRoute = require('./authRoute')


module.exports = app =>{
    app.use(bodyParser.json())
    app.use(authRoute)
    app.use(projectsRoute)
    app.use(usersRoute)
    
    
}