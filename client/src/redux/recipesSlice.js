import { createSlice } from '@reduxjs/toolkit'
import { getRecipes, findRecipes } from './utils/thunk'

const initialState = {
  recipes: [],
  filteredRecipes: [],
  isLoading: false,
  rejected: false
}

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setAscen: (state) => {
      state.filteredRecipes = state.filteredRecipes.sort((a, b) => {
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
      state.filteredRecipes = state.filteredRecipes.sort((a, b) => {
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
    },
    setMinorToMajor: (state) => {
      state.filteredRecipes = state.filteredRecipes.sort((a, b) => {
        const score1 = a.healthScore
        const score2 = b.healthScore
        if (score1 < score2) {
          return -1
        }
        if (score1 > score2) {
          return 1
        }
        return 0
      })
    },
    setMajorToMinor: (state) => {
      state.filteredRecipes = state.filteredRecipes.sort((a, b) => {
        const score1 = a.healthScore
        const score2 = b.healthScore
        if (score1 > score2) {
          return -1
        }
        if (score1 < score2) {
          return 1
        }
        return 0
      })
    },
    setFilteredRecipes: (state, action) => {
      const totalRecipes = state.recipes
      const totalDiets = action.payload
      const filterRecipes = totalRecipes.filter((recipe) => {
        return totalDiets.every((diet) => {
          return recipe.diets.includes(diet)
        })
      })
      state.filteredRecipes = filterRecipes || totalRecipes
    }
  },
  extraReducers: {
    [getRecipes.pending]: (state) => {
      state.isLoading = true
    },
    [getRecipes.fulfilled]: (state, action) => {
      state.isLoading = false
      state.recipes = action.payload
      state.filteredRecipes = action.payload
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
      state.rejected = true
      state.recipes = []
    }
  }
})

export const selectRecipes = (state) => state.recipes.recipes
export const getGecipesFilter = (state) => state.recipes.filteredRecipes
export const selectIsLoading = (state) => state.recipes.isLoading

export const { setAscen, setDescen, setRecipes, setMinorToMajor, setMajorToMinor, setFilteredRecipes } =
  recipesSlice.actions

export default recipesSlice.reducer
