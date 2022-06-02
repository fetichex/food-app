import styled /* { css } */ from 'styled-components'
import { color } from '../../styles/variables.styles'

/* const mixinBorder = css`
  border: 2px solid ${color.red};
` */

export const GridLayout = styled.section`
  display: grid;
  grid-template-rows: 0.3fr 1fr 1fr 1fr;
  grid-template-columns: 0.75fr 1fr 1fr 1fr;

  grid-template-areas:
    'header header header header'
    'aside  cards cards cards'
    'aside  cards cards cards'
    'aside  cards cards cards';

  height: 100vh;
  overflow: hidden;
`

export const AreaHeader = styled.header`
  grid-area: header;
`

export const AreaAside = styled.aside`
  grid-area: aside;
  background-color: ${color.lightBlue};
`

export const AreaCards = styled.section`
  grid-area: cards;
`
