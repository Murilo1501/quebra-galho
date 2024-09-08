const {Router } = require('express')
const UserController = require('../controllers/userController')
const authenticated = require('./../middleware/authenticated')

const router = Router()

router.use(authenticated)

router.post('/users',UserController.store)
router.get('/users/:id',UserController.index)
router.delete('/users/:id',UserController.destroy)
router.put('/users/:id',UserController.update)

module.exports = router