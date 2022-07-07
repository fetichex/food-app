const toDTO = (recipe) => {
  return {
    id: recipe.id,
    name: recipe.name,
    summary: recipe.summary,
    healthScore: recipe.healthScore,
    steps: recipe.steps,
    diets: recipe.diets.map((diet) => diet.name)
  }
}

module.exports = { toDTO }
