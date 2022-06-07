import styled from 'styled-components'
import { motion } from 'framer-motion'
import mixin from '../../styles/mixins'
import color from '../../styles/variables.styles'

export const Paginator = styled.div`
  ${mixin.flex};
  width: 400px;
  height: 50px;
  margin: 30px 0;
  gap: 10px;
`

export const Button = styled(motion.button)`
  cursor: pointer;
  width: 35px;
  height: 25px;
  outline: none;
  border: none;
  border-radius: 50px;
  color: ${(props) => (props.active === 'active' ? '#000' : color.beige)};
  background-color: ${(props) =>
    props.active === 'active' ? 'tomato' : color.blue};
`
