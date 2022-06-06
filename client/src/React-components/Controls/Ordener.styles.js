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
  ${mixin.flex('column')}
  width: 200px;
  height: 100%;

  section {
    width: 55%;
  }

  div {
    ${mixin.flex('row', 'center', 'space-around')}
    width: 100%;
  }
`
