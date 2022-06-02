require('dotenv').config()
const { Router } = require('express')
const router = Router()
const {
  getRecipeById,
  getRecipeByName,
  createRecipe
} = require('../controllers/recipes')

router.get('/:idRecipe', async (request, response, next) => {
  const { idRecipe } = request.params
  try {
    const recipe = await getRecipeById(idRecipe)
    if (recipe.status === 404) {
      response.status(404).send(recipe)
    } else {
      response.status(200).send(recipe)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/', async (request, response, next) => {
  const { name } = request.query
  try {
    const recipe = await getRecipeByName(name)
    if (recipe.status === 404) {
      response.status(404).send(recipe)
    } else {
      response.status(200).send(recipe)
    }
  } catch (error) {
    next(error)
  }
})

router.post('/', async (request, response, next) => {
  const { name, summary, health, steps, diets} = request.body
  try {
    const recipe = await createRecipe(name, summary, health, steps, diets)
    response.status(201).send(recipe)
  } catch (error) {
    next(error)
  }
})

module.exports = router
