import { createSlice } from '@reduxjs/toolkit'
import { getRecipes, findRecipes, getDiets } from './thunks/thunk'

const initialState = {
  recipes: [],
  diets: [],
  isLoading: false
}

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: {
    [getRecipes.pending]: (state) => {
      state.isLoading = true
    },
    [getRecipes.fulfilled]: (state, action) => {
      state.isLoading = false
      state.recipes = action.payload
    },
    [getRecipes.rejected]: (state) => {
      state.isLoading = false
    },
    [findRecipes.pending]: (state) => {
      state.isLoading = true
    },
    [findRecipes.fulfilled]: (state, action) => {
      state.isLoading = false
      state.recipes = action.payload
    },
    [findRecipes.rejected]: (state) => {
      state.isLoading = false
      state.recipes = []
    },
    [getDiets.pending]: (state) => {
      state.isLoading = true
    },
    [getDiets.fulfilled]: (state, action) => {
      state.isLoading = false
      state.diets = action.payload
    },
    [getDiets.rejected]: (state) => {
      state.isLoading = false
    }
  }
})

export const selectRecipes = (state) => state.recipes.recipes
export const selectDiets = (state) => state.recipes.diets

export default recipesSlice.reducer
