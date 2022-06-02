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

export const DetailRecipes = ({ name, image, summary, diets, dishs, steps }) => {
  const isLoading = useSelector((state) => selectDetailIsLoading(state))
  const detail = useSelector((state) => selectDetailRecipe(state))

  if (isLoading === true) {
    return <h1>Loading...</h1>
  }
  console.log(detail)

  return (
    <>
      <RecipeDetailContainer>
        <Header>
          <h1>{name}</h1>
        </Header>
        <Aside>
          <Image src={image} alt={name} />
          <Diets>
            <h3>Diet types:</h3>
            {diets.map((diet, index) => (
              <li key={index}>{diet}</li>
            ))}
          </Diets>
          <Dish>
            <h3>Dish types:</h3>
            {dishs.map((dish, index) => (
              <li key={index}>{dish}</li>
            ))}
          </Dish>
        </Aside>
        <Body>
          <Summary>{summary}</Summary>
          <Steps>
            <h3>Steps to step:</h3>
            {steps.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))}
          </Steps>
        </Body>
      </RecipeDetailContainer>
    </>
  )
}
