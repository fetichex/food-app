const { Router } = require('express')
const router = Router()
const recipeRoute = require('./recipes.js')
const typeRoute = require('./diets.js')

const Diets = require('../db.js').Diets

router.use('/recipes', recipeRoute)
router.use('/diets', typeRoute)
router.use('/prueba', async (_, res) => {
  const data = await Diets.findAll({
    attributes: ['id', 'name'],
    where: { id: [1, 3, 5, 7] }
  })
  res.send(data)
})

module.exports = router
