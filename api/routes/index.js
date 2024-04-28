const bodyParser = require('body-parser')
const usersRoute = require('./usersRoute')


module.exports = app =>{
    app.use(bodyParser.json())
    app.use(usersRoute)
}