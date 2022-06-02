import { useSelector } from 'react-redux'
// import { selectDetailRecipe } from '../../redux/detailSlice'
import { DetailRecipes } from '../DetailRecipes/DetailRecipes'

export const ContainerDetail = () => {
  const detail = useSelector((state) => state.detail)

  console.log(detail.id)
  return (
    <>
      <DetailRecipes
        name={detail.title}
        id={detail.id}
        diets={detail.diets}
        dish={detail.dishTypes}
        summary={detail.summary}
        steps={detail.steps}
        image={detail.image}
      />
    </>
  )
}
