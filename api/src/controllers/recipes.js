require('dotenv').config()
const { toDTO } = require('../utils.js')
const { Recipes, Diets, recipesDiets, Op } = require('../db.js')
const { notFound } = require('./notFound.js')
const axios = require('axios')
const { URL_PATH, API_KEY } = process.env
const UUID =
  /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/

const createRecipe = async (name, summary, healthScore, steps, diets) => {
  const recipe = await Recipes.create({
    name: name.toUpperCase(),
    summary,
    healthScore,
    steps,
    diets
  })
  await diets.forEach((diet) => {
    recipesDiets.create({ recipeId: recipe.id, dietId: diet })
  })
  return recipe
}

const getAllRecipes = async () => {
  try {
    const apiRecipes = await axios.get(
      `${URL_PATH}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    )
    const dbRecipes = await Recipes.findAll({
      include: [
        {
          model: Diets,
          attributes: ['name']
        }
      ]
    })
    const allRecipes = [...dbRecipes]
      .map((recipe) => toDTO(recipe))
      .concat(apiRecipes.data.results)

    return allRecipes.length !== 0 ? allRecipes : notFound()
  } catch (error) {
    return notFound()
  }
}

const getRecipeByName = async (name) => {
  const nameFormated = `%${name.toUpperCase().replace(' ', '% %')}%`
  try {
    const apiRecipes = await axios.get(
      `${URL_PATH}complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true`
    )
    const dbRecipes = await Recipes.findAll({
      where: {
        name: {
          [Op.like]: { [Op.any]: nameFormated.split(' ') }
        }
      },
      include: {
        model: Diets,
        attributes: ['name']
      }
    })

    const recipes = [...dbRecipes].map((recipe) => toDTO(recipe))
    const result = recipes
      ? [...apiRecipes.data.results, ...recipes]
      : apiRecipes.data.results

    return result.length !== 0 ? result : notFound()
  } catch (error) {
    return notFound()
  }
}

const getRecipeById = async (id) => {
  if (UUID.test(id)) {
    const recipes = await Recipes.findByPk(id, { include: { model: Diets } })
    if (!recipes) return notFound()
    const recipe = {
      id: recipes.id,
      healthScore: recipes.healthScore,
      name: recipes.name,
      diets: recipes.diets ? recipes.diets.map((diet) => diet.name) : [],
      summary: recipes.summary,
      steps: !isNaN(recipes.steps) ? null : [{ step: recipes.steps }]
    }
    return recipe
  } else {
    try {
      const recipes = await axios.get(
        `${URL_PATH}${id}/information?apiKey=${API_KEY}`
      )
      const recipe = {
        id: recipes.data.id,
        healthScore: recipes.data.healthScore,
        title: recipes.data.title,
        image: recipes.data.image,
        diets: recipes.data.diets,
        dishTypes: recipes.data.dishTypes,
        summary: recipes.data.summary.replace(/<[^>]*>?/g, ''),
        steps:
          recipes.data.analyzedInstructions.length !== 0
            ? recipes.data.analyzedInstructions[0].steps
            : null
      }
      return recipe
    } catch (error) {
      return notFound()
    }
  }
}

module.exports = { getAllRecipes, getRecipeById, getRecipeByName, createRecipe }
