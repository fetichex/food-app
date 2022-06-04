import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAscen, setDescen } from '../../redux/recipesSlice'
import { CheckBoxes, CheckBox, Label } from './Controls.styles'

export const Controls = () => {
  const dispatch = useDispatch()
  /*   const initialState = {
    checkBoxOne: false,
    checkBoxTwo: false
  }

  const [state, setState] = useState(initialState)

  const toggleCheck = (event) => {
    const { name } = event.target
    const newState = { ...state }
    setState({
      newState,
      [name]: !newState[name]
    })
    console.log(name)
  } */

  const [checked, setChecked] = useState(false)
  const [checked1, setChecked1] = useState(false)

  const handleChange = (event) => {
    dispatch(setAscen())
    if (event.target.name === 'a-z') {
      setChecked(!checked)
      if (checked1) {
        setChecked1(!checked1)
      }
    }
    if (event.target.name === 'z-a') {
      dispatch(setDescen())
      setChecked1(!checked1)
      if (checked) {
        setChecked(!checked)
      }
    }
    console.log(event.target.name)
  }

  return (
    <>
      <CheckBoxes>
        <CheckBox
          id="a-z"
          name="a-z"
          checked={checked}
          type="checkbox"
          onChange={handleChange}
        />
        <Label htmlFor="a-z">a-z</Label>
        <CheckBox
          id="z-a"
          name="z-a"
          checked={checked1}
          type="checkbox"
          onChange={handleChange}
        />
        <Label htmlFor="z-a">z-a</Label>
      </CheckBoxes>
    </>
  )
}
