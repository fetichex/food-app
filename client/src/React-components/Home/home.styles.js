import styled from 'styled-components'
import mixin from '../../styles/mixins'

export const GridLayout = styled.section`
  display: grid;
  grid-template-rows: 0fr 1fr 1fr 1fr;
  grid-template-columns: 0fr 1fr 1fr 1fr;

  grid-template-areas:
    'header header header header'
    '. cards cards cards'
    '. cards cards cards'
    '. cards cards cards';

  min-height: 100vh;
`

export const AreaHeader = styled.header`
  grid-area: header;
`
export const AreaCards = styled.section`
  grid-area: cards;
  height: 100%;
`
export const CardsContainer = styled.div`
  ${mixin.flex}
`
export const Cards = styled.div`
  ${mixin.grid}
  margin: 8px 0;
`

export const Controls = styled.div`
  ${mixin.flex('column')}
`
