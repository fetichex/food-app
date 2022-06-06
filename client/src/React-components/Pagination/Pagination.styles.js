import styled from 'styled-components'
import mixin from '../../styles/mixins'
import color from '../../styles/variables.styles'

export const Paginator = styled.ul`
  ${mixin.flex};
  width: 100%;
  height: 50px;
  margin: 30px 0;

  button {
    ${mixin.flex}
    margin: 0 .5rem;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: ${color.beige};
    border: none;
    cursor: pointer;
    background-color: ${color.blue};
  }
`
