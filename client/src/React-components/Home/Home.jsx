import { CardContainer } from '../CardContainer/CardContainer'
import { Header } from '../Header/Header'
import Controls from '../Controls/Controls'
import { GridLayout, AreaHeader, AreaAside, AreaCards } from './home.styles'

export const Home = () => {
  return (
    <>
      <GridLayout>
        <AreaHeader>
          <Header />
        </AreaHeader>
        <AreaAside>
          <Controls />
        </AreaAside>
        <AreaCards>
          <CardContainer />
        </AreaCards>
      </GridLayout>
    </>
  )
}
