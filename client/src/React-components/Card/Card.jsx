import { getDetail } from '../../redux/thunks/thunk'
import { useDispatch } from 'react-redux'
import {
  Container,
  Name,
  Diets,
  DietsContainer,
  Image,
  Header,
  Info
} from './Card.styles'

export const Card = ({ id, image, name, diets }) => {
  const dispatch = useDispatch()
  return (
    <>
      <Container to={`/home/${id}`} onClick={() => dispatch(getDetail(id))}>
        <Header>{<Image src={image} alt={name} />}</Header>
        <Info>
          <Name>{name}</Name>
          <DietsContainer>
            <h3>Diets: </h3>
            <div>
              {diets.map((diet, i) => (
                <Diets key={i}>{diet}</Diets>
              ))}
            </div>
          </DietsContainer>
        </Info>
      </Container>
    </>
  )
}
