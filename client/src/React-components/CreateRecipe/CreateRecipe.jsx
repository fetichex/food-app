import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getDiets } from '../../redux/thunks/thunk'
import { selectDiets } from '../../redux/recipesSlice'
import {
  Label,
  Health,
  Title,
  TextArea,
  Form,
  CheckBox,
  Texts,
  CheckBoxes
} from './CreateRecipe.styles'

export const CreateRecipe = () => {
  const dispatch = useDispatch()
  const diets = useSelector((state) => selectDiets(state))

  const [selected, setSelected] = useState([])

  const handleOnChange = (id) => {
    const find = selected.indexOf(id)

    if (find > -1) {
      selected.splice(find, 1)
    } else {
      selected.push(id)
    }
    setSelected([...selected])
    console.log(selected)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    dispatch(getDiets())
  }, [dispatch])

  return (
    <>
      <Form>
        <Texts>
          <div>
            <Label htmlFor="title">title</Label>
            <Title type="text" id="title" />
            <Label htmlFor="health">health score</Label>
            <Health type="number" id="health" />
          </div>
          <Label htmlFor="summary">summary</Label>
          <TextArea id="summary" />
          <Label htmlFor="instructions">instructions</Label>
          <TextArea id="instructions" />
        </Texts>
        <CheckBoxes>
          {diets.map((diet) => (
            <Label key={diet.id} htmlFor={diet.id}>
              <CheckBox
                onChange={() => handleOnChange(diet.id)}
                selected={selected.includes(diet.id)}
                key={diet.id}
                type="checkbox"
                id={diet.id}
              />
              {diet.name}
            </Label>
          ))}
        </CheckBoxes>
        <button onClick={() => handleSubmit}>Create</button>
      </Form>
    </>
  )
}
