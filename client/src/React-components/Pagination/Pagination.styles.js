import styled from 'styled-components'
import mixin from '../../styles/mixins'
import { color } from '../../styles/variables.styles'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  ${mixin.flex}
`

export const Page = styled(Link)`
  ${mixin.flex}
  margin: 0 .5rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #000;
  background-color: ${(props) =>
    props.active === 'active' ? 'tomato' : color.beige};
  transform: ${(props) =>
    props.direction === 'left' ? 'rotate(180deg)' : 'rotate(0deg)'};
`
