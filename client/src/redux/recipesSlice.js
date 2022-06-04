import { createSlice } from '@reduxjs/toolkit'
import { getRecipes, findRecipes } from './utils/thunk'

const initialState = {
  recipes: [],
  isLoading: false,
  isAscen: false
}

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setAscen: (state) => {
      state.isAscen = true
      state.recipes = state.recipes.sort((a, b) => {
        const name1 = !a.title ? a.name : a.title
        const name2 = !b.title ? b.name : b.title
        if (name1 < name2) {
          return -1
        }
        if (name1 > name2) {
          return 1
        }
        return 0
      })
    },
    setDescen: (state) => {
      state.isAscen = false
      state.recipes = state.recipes.sort((a, b) => {
        const name1 = !a.title ? a.name : a.title
        const name2 = !b.title ? b.name : b.title

        if (name1 > name2) {
          return -1
        }
        if (name1 < name2) {
          return 1
        }
        return 0
      })
    }
  },
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
      console.log('findRecipes.fulfilled', state.recipes)
    },
    [findRecipes.rejected]: (state) => {
      state.isLoading = false
      state.recipes = []
    }
  }
})

export const selectRecipes = (state) => state.recipes.recipes
export const selectIsLoading = (state) => state.recipes.isLoading

export const { setAscen, setDescen } = recipesSlice.actions

export default recipesSlice.reducer
