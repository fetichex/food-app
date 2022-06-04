import { configureStore } from '@reduxjs/toolkit'
import recipesReducer from './recipesSlice'
import detailReducer from './detailSlice'
import dietReducer from './dietsSlice'

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    detail: detailReducer,
    diet: dietReducer
  }
})
