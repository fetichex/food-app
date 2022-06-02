import styled from 'styled-components'
import { color } from '../../styles/variables.styles'

export const Label = styled.label`
  font-size: 1rem;
  text-transform: capitalize;
`
export const Title = styled.input`
  height: 30px;
  width: 450px;
`
export const Health = styled.input`
 height: 30px;
  width: 50px;
`

export const TextArea = styled.textarea`
  width: 450px;
  height: 150px;
`

export const Form = styled.form`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 100vh;
  border: 2px solid ${color.blue};
  font-size: 1px;

  button {
    width: 150px;
    height: 50px;
    border-radius: 5px;
    background-color: ${color.blue};
    border: none;
    color: ${color.white};
    font-size: 1.5rem;
    cursor: pointer;
  }
`
export const CheckBox = styled.input``

export const CheckBoxes = styled.div`
  width: 450px;
  height: 140px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 2px solid ${color.blue};
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${color.blue};
  align-items: flex-start;
  justify-content: center;

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`
