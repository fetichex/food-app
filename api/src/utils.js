const toDTO = (recipe) => {
  return {
    id: recipe.id,
    name: recipe.name,
    summary: recipe.summary,
    health: recipe.health,
    steps: recipe.steps,
    diets: recipe.diets.map((diet) => diet.name)
  }
}

module.exports = { toDTO }