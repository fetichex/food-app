import { useSelector } from 'react-redux'
// import { selectDetailRecipe } from '../../redux/detailSlice'
import { DetailRecipes } from '../DetailRecipes/DetailRecipes'
import { useDispatch } from 'react-redux'

export const ContainerDetail = () => {
  const dispatch = useDispatch()
  
  console.log(detail.id)
  return (
    <>
      <DetailRecipes
        name={detail.title}
        id={detail.id}
        diets={detail.diets}
        dishs={detail.dishTypes}
        summary={detail.summary}
        steps={detail.steps}
        image={detail.image}
      />
    </>
  )
}
