import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../../redux/thunks/thunk'
import { selectRecipes } from '../../redux/recipesSlice'
import { Card } from '../Card/Card'
import { Container, Cards } from './CardContainer.styles'

export const CardContainer = () => {
  const recipes = useSelector((state) => selectRecipes(state))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch])

  return (
    <>
      <Container>
        <Cards>
          {recipes.map((recipe) => (
            <Card
              key={recipe.id}
              id={recipe.id}
              name={recipe.title}
              image={recipe.image}
              diets={recipe.diets}
            />
          ))}
        </Cards>
      </Container>
    </>
  )
}
