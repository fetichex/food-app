import styled from 'styled-components'
import mixin from '../../styles/mixins'

export const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-transform: uppercase;
`

export const Input = styled.input`
  cursor: pointer;
  margin-right: 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
`

export const Check = styled.div`
  ${mixin.flex};
  margin: 0.5rem 0;
`
