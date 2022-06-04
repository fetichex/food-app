import styled from 'styled-components'
import mixin from '../../styles/mixins'

export const CheckBox = styled.input`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`

export const Label = styled.label`
  font-size: 1.2rem;
  text-transform: uppercase;
`

export const CheckBoxes = styled.div`
  width: 100%;
  height: 100%;
  ${mixin.flex('column')}
`
