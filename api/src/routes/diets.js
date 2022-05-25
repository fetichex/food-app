const { Router } = require('express')
const router = Router()
const { Diets } = require('../db.js'),
  { chargeDiets } = require('../charger/diets.js')

router.get('/', async (_req, res, next) => {
  try {
    chargeDiets()
    const diets = await Diets.findAll()
    res.status(200).json(diets)
  } catch (error) {
    next(error)
  }
})

module.exports = router
