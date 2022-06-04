import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const createRecipe = createAsyncThunk(
  'recipes/createRecipe',
  async (recipe, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3001/recipes', recipe)
      console.log('recipe created', response.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3002/results' || 'http://localhost:3001/recipes')
      console.log(response)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const findRecipes = createAsyncThunk(
  'recipes/findRecipes',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/recipes?name=${query}`
      )
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getDetail = createAsyncThunk(
  'detail/getDetail',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/recipes/${id}`)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getDiets = createAsyncThunk(
  'recipes/getDiets',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3001/diets')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

/* 'https://api.spoonacular.com/recipes/complexSearch?apiKey=0cde6cf0b30847f693ee875ea6dac7fb&addRecipeInformation=true&offset=0&number=9' */
/* 'https://api.spoonacular.com/recipes/complexSearch?apiKey=ed3ea45553fa4e2297cd5a6594f94408&addRecipeInformation=true&offset=18&number=9' */ //  'http://localhost:3002/results'
