import styled from 'styled-components'
import { color } from '../../styles/variables.styles'

export const Label = styled.label`
  font-size: 1.1rem;
  text-transform: capitalize;
`
export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Title = styled.input`
  padding: 0.5rem;
  height: 30px;
  width: 320px;
  border: none;
  font-size: 1.1rem;
`

export const DivHealth = styled.div`
  width: 100px;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LabelHealth = styled(Label)`
  font-size: 0.8rem;
  line-height: 0.8rem;
`
export const Labeldiv = styled.div`
  width: 100px;
`
export const Health = styled.input`
  height: 30px;
  width: 50px;
  font-size: 1.1rem;
  border: none;
`

export const TextArea = styled.textarea`
  padding: 0.5rem;
  width: 450px;
  height: 150px;
  font-size: 1.1rem;
  border: none;
  resize: none;
`

export const Form = styled.form`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 100vh;
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
export const CheckBox = styled.input`
  margin-right: 5px;
  width: 15px;
  height: 15px;
`

export const CheckBoxes = styled.div`
  margin-top: 20px;
  width: 450px;
  height: 140px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const Inputs = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
