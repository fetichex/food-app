const { Diets } = require('../db.js')

const diets = [
  'gluten free',
  'ketogenic',
  'lacto-vegetarian',
  'ovo-vegetarian',
  'paleo',
  'pescetarian',
  'primal',
  'vegan',
  'vegetarian',
  'low fodmap',
  'whole30'
].sort()

const chargeDiets = async () => {
  console.log('entro al cargador')
  let res = await Diets.findAll()
  console.log(res.length)
  if (res.length < 1) {
    diets.forEach((diet, i) => {
      Diets.create({
        id: i + 1,
        name: diet
      })
    })
  }
}

module.exports = { chargeDiets }
