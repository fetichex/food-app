import styled from 'styled-components'

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
