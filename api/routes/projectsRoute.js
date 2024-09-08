const {Router } = require('express')
const ProjectController = require('../controllers/projectController')

const router = Router()

router.post('/project',ProjectController.store)
router.get('/project/:id',ProjectController.index)

module.exports = router;