require('dotenv').config()
const { Router } = require('express')
const router = Router()
const {
  getAllRecipes,
  getRecipeById,
  getRecipeByName,
  createRecipe
} = require('../controllers/recipes')

router.get('/', async (_, response, next) => {
  try {
    const recipes = await getAllRecipes()
    if (recipes.status === 404) {
      response.status(404).send(recipes)
    }
    response.status(200).send(recipes)
  } catch (error) {
    next(error)
  }
})

router.get('/search', async (request, response, next) => {
  const { name } = request.query
  try {
    const recipes = await getRecipeByName(name)
    if (recipes.status === 404) {
      response.status(404).send(recipes)
    }
    response.status(200).send(recipes)
  } catch (error) {
    next(error)
  }
})

router.get('/:idRecipe', async (request, response, next) => {
  const { idRecipe } = request.params
  try {
    const recipe = await getRecipeById(idRecipe)
    if (recipe.status === 404) {
      response.status(404).send(recipe)
    }
    response.status(200).send(recipe)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (request, response, next) => {
  const { name, summary, healthScore, steps, diets } = request.body
  try {
    const recipe = await createRecipe(name, summary, healthScore, steps, diets)
    response.status(201).send(recipe)
  } catch (error) {
    next(error)
  }
})

module.exports = router
