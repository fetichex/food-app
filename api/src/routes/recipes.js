require("dotenv").config();
const { Router } = require("express"),
  router = Router(),
  {
    getRecipeById,
    getRecipeByName,
    createRecipe,
  } = require("../controllers/recipes");

router.get("/:idRecipe", async (request, response, next) => {
  const { idRecipe } = request.params;
  try {
    const recipe = await getRecipeById(idRecipe);
    response.send(recipe);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (request, response, next) => {
  const { name } = request.query;
  try {
    const recipe = await getRecipeByName(name);

    if (recipe.status === 404) {
      response.status(404).send(recipe);
    } else {
      response.status(200).send(recipe);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (request, response, next) => {
  const { name, summary, health, steps } = request.body;
  try {
    const recipe = await createRecipe(name, summary, health, steps);
    response.status(201).send(recipe);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
