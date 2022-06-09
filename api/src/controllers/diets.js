const { Diets } = require('../db.js')

const diets = [
  { name: 'dairy free' },
  { name: 'gluten free' },
  { name: 'ketogenic' },
  { name: 'lacto ovo vegetarian' },
  { name: 'paleolithic' },
  { name: 'pescatarian' },
  { name: 'primal' },
  { name: 'vegan' },
  { name: 'whole30' }
]

const getDiets = async () => {
  let res = await Diets.findAll()
  if (res.length < 1) {
    await Diets.bulkCreate(diets)
  }
  res = await Diets.findAll()
  return res
}

module.exports = { getDiets }
