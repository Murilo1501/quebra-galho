const {Router } = require('express')
const UserController = require('../controllers/userController')

const router = Router()

router.post('/users',UserController.store)

module.exports = router