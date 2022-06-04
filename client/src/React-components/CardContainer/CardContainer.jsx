import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../../redux/utils/thunk'
import { selectRecipes, selectIsLoading } from '../../redux/recipesSlice'
import { Card } from '../Card/Card'
import { Container, Cards } from './CardContainer.styles'

export const CardContainer = () => {
  const recipes = useSelector((state) => selectRecipes(state))
  const isLoading = useSelector((state) => selectIsLoading(state))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Container>
        <Cards>
          {recipes.map((recipe) => (
            <Card
              key={recipe.id}
              id={recipe.id}
              name={recipe.title || recipe.name}
              image={recipe.image}
              diets={recipe.diets}
            />
          ))}
        </Cards>
      </Container>
    </>
  )
}
