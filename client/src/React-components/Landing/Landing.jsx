import {
  Title,
  Container,
  LinkContainer,
  GoToHome,
  ImgContainer,
  ImgLanding,
  Main,
  Text
} from './landing.styles'

import imgLanding from '../../static/img/imgLanding.png'

export const Landing = () => {
  return (
    <>
      <Container>
        <ImgContainer>
          <ImgLanding src={imgLanding} alt="landing" />
        </ImgContainer>
        <Main>
          <Title>Api Food</Title>
          <LinkContainer whileHover={{ scale: 1.1 }}>
            <GoToHome to="/home">
              <Text>Home</Text>
            </GoToHome>
          </LinkContainer>
        </Main>
      </Container>
    </>
  )
}
