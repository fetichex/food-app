import styled from 'styled-components'
import mixin from '../../styles/mixins'
import { color } from '../../styles/variables.styles'

export const Section = styled.div`
  ${mixin.flex('row', 'center', 'space-around')}
  max-width: 100%;
  height: 15vh;
  background-color: ${color.blue};
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  h1 {
    margin: 0;
    font-size: 3rem;
    color: ${color.beige};
  }
`
