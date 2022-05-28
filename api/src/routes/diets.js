const { Router } = require('express')
const router = Router()
const { getDiets } = require('../controllers/diets.js')

router.get('/', async (_req, res, next) => {
  try {
    const diets = await getDiets()
    res.status(200).json(diets)
  } catch (error) {
    next(error)
  }
})

module.exports = router
