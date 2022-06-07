import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getRecipesFilter,
  selectIsLoading,
  selectRejected
} from '../../redux/recipesSlice'
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
  const rejected = useSelector((state) => selectRejected(state))
  const recipes = useSelector((state) => getRecipesFilter(state))
  const [currentPage, setCurrentPage] = useState(1)
  const [recipesPerPage] = useState(6)
  const howManyPages = Math.ceil(recipes.length / recipesPerPage)
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

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
              howManyPages={howManyPages}
              setCurrentPage={setCurrentPage}
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
            {/* eslint-disable */}
            {!!rejected ? (
              <h1>No recipes</h1>
            ) : (
              <Cards>
                {currentRecipes?.map((recipe) => (
                  <Card
                    key={recipe.id}
                    id={recipe.id}
                    name={recipe.title || recipe.name}
                    image={recipe.image}
                    diets={recipe.diets}
                  />
                ))}
              </Cards>
            )}
            {/* eslint-enable */}
          </CardsContainer>
        </AreaCards>
      </GridLayout>
    </>
  )
}
