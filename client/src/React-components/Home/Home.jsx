import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGecipesFilter, selectIsLoading } from '../../redux/recipesSlice'
import { getRecipes } from '../../redux/utils/thunk'
import { Header } from '../Header/Header'
import { Card } from '../Card/Card'
import { Pagination } from '../Pagination/Pagination'
import Ordener from '../Controls/Ordener'
import Filter from '../Controls/Filter'
import {
  GridLayout,
  AreaHeader,
  AreaCards,
  CardsContainer,
  Cards,
  Controls
} from './home.styles'

export const Home = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => selectIsLoading(state))
  const recipes = useSelector((state) => getGecipesFilter(state))
  const [currentPage, setCurrentPage] = useState(1)
  const [recipesPerPage] = useState(9)
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <GridLayout>
        <AreaHeader>
          <Header />
        </AreaHeader>
        <AreaCards>
          <div>
            <Pagination
              recipesPagination={recipesPerPage}
              allRecipes={recipes.length}
              pagination={pagination}
              currentPage={currentPage}
            />
          </div>
          <CardsContainer>
            <Controls>
              <div>
                <p>Order by</p>
                <Ordener />
              </div>
              <div>
                <p>Filter by</p>
                <Filter />
              </div>
            </Controls>
            <Cards>
              {currentRecipes.map((recipe) => (
                <Card
                  key={recipe.id}
                  id={recipe.id}
                  name={recipe.title || recipe.name}
                  image={recipe.image}
                  diets={recipe.diets}
                />
              ))}
            </Cards>
          </CardsContainer>
        </AreaCards>
      </GridLayout>
    </>
  )
}
