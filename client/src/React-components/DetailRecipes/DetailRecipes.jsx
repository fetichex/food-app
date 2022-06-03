import { useSelector } from 'react-redux'
import {
  selectDetailIsLoading,
  selectDetailRecipe
} from '../../redux/detailSlice'
import {
  RecipeDetailContainer,
  Aside,
  Diets,
  Dish,
  Steps,
  Header,
  Body,
  Image,
  Summary
} from './DetailRecipes.styles'
// import { recipe } from './mock'

export const DetailRecipes = () => {
  const isLoading = useSelector((state) => selectDetailIsLoading(state))
  const detail = useSelector((state) => selectDetailRecipe(state))

  if (isLoading === true) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <RecipeDetailContainer>
        <Header>
          <h1>{detail.title || detail.name}</h1>
        </Header>
        <Aside>
          <Image src={detail.image} alt={detail.name} />
          <Diets>
            <h3>Diet types:</h3>
            {detail.diets.map((diet, index) => (
              <li key={index}>{diet}</li>
            ))}
          </Diets>
          <Dish>
            <h3>Dish types:</h3>
            {detail.dishTypes?.map((dish, index) => (
              <li key={index}>{dish}</li>
            )) || <li>No dish types</li>}
          </Dish>
        </Aside>
        <Body>
          <Summary>{detail.summary}</Summary>
          <Steps>
            <h3>Steps to step:</h3>
            {detail.steps?.map((step, index) => (
              <li key={index}>{step.step || 'No Steps'}</li>
            )) || <li>No steps</li>}
          </Steps>
        </Body>
      </RecipeDetailContainer>
    </>
  )
}
