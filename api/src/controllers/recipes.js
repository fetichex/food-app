require("dotenv").config();
const { Recipes, Op } = require("../db.js"),
  { notFound } = require("./notFound.js"),
  axios = require("axios"),
  { URL_PATH, API_KEY } = process.env,
  UUID = new RegExp(
    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"
  );

const getRecipeByName = async (name) => {
  const nameFormated = `%${name.toUpperCase().replace(" ", "% %")}%`;
  try {
    const apiRecipes = await axios.get(
      `${URL_PATH}complexSearch?apiKey=${API_KEY}&query=${name}`
    );
    const dbRecipes = await Recipes.findAll({
      where: {
        name: {
          [Op.like]: { [Op.any]: nameFormated.split(" ") },
        },
      },
    });
    result = dbRecipes
      ? [...apiRecipes.data.results, ...dbRecipes]
      : apiRecipes.data.results;
    return result.length !== 0 ? result : notFound();
  } catch (error) {
    console.log(error);
  }
};

const createRecipe = async (name, summary, health, steps) => {
  const recipe = await Recipes.create({
    name: name.toUpperCase(),
    summary,
    health,
    steps,
  });
  return recipe;
};

const getRecipeById = async (id) => {
  if (UUID.test(id)) {
    let recipe = await Recipes.findByPk(id);
    if (!recipe) return notFound();
    return recipe;
  } else {
    try {
      const recipes = await axios.get(
        `${URL_PATH}${id}/information?apiKey=${API_KEY}`
      );
      const recipe = {
        id: recipes.data.id,
        healthScore: recipes.data.healthScore,
        title: recipes.data.title.toUpperCase(),
        diets: recipes.data.diets,
        summary: recipes.data.summary,
        instruc: recipes.data.instructions,
        steps:
          recipes.data.analyzedInstructions.length !== 0
            ? recipes.data.analyzedInstructions[0].steps
            : null,
      };
      return recipe;
    } catch (error) {
      return notFound();
    }
  }
};

module.exports = { getRecipeById, createRecipe, getRecipeByName };
