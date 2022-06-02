import { configureStore } from '@reduxjs/toolkit'
import recipesReducer from './recipesSlice'
import detailReducer from './detailSlice'

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    detail: detailReducer
  }
})
