const { Router } = require('express')
const router = Router()
const axios = require('axios')

const { Recipes, Diets } = require('../db.js')

const { v4: uuidv4 } = require('uuid')

const { PATH, API_KEY } = process.env

const UUID = new RegExp(
  '^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$'
)

router.get('/', async (req, res, next) => {
  const { name, toGet } = req.query
  if (!name) {
    
  }
})

module.exports = router
