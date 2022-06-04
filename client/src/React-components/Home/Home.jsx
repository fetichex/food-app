import { CardContainer } from '../CardContainer/CardContainer'
import { Header } from '../Header/Header'
import { GridLayout, AreaHeader, AreaCards } from './home.styles'

export const Home = () => {
  return (
    <>
      <GridLayout>
        <AreaHeader>
          <Header />
        </AreaHeader>
        <AreaCards>
          <CardContainer />
        </AreaCards>
      </GridLayout>
    </>
  )
}
