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
  return (
    <>
      <Container to={`/recipe/${id}`}>
        <Header>{<Image src={image} alt={name} />}</Header>
        <Info
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 0.8,
            transition: {
              duration: 0.2,
              ease: 'easeInOut'
            }
          }}>
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
