import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getDiets, createRecipe } from '../../redux/utils/thunk'
import { selectDiets } from '../../redux/dietsSlice'
import {
  Label,
  Inputs,
  DivHealth,
  DivTitle,
  LabelHealth,
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

  const CheckOnChange = (id) => {
    const find = selected.indexOf(id)

    if (find > -1) {
      selected.splice(find, 1)
    } else {
      selected.push(id)
    }
    setSelected([...selected])
    console.log(selected)
  }

  const getValues = (e) => {
    const values = {
      name: e.target.title.value,
      summary: e.target.summary.value,
      health: e.target.health.value,
      steps: e.target.steps.value,
      diets: selected
    }
    return values
  }

  useEffect(() => {
    dispatch(getDiets())
  }, [dispatch])

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(createRecipe(getValues(e)))
        }}>
        <Texts>
          <Inputs>
            <DivTitle>
              <Label htmlFor="title">title</Label>
              <Title type="text" id="title" name="title" />
            </DivTitle>
            <DivHealth>
              <LabelHealth htmlFor="health">
                health
                <br />
                score
              </LabelHealth>
              <Health type="number" id="health" name="health" />
            </DivHealth>
          </Inputs>
          <Label htmlFor="summary">summary</Label>
          <TextArea id="summary" name="summary" />
          <Label htmlFor="steps">step to step</Label>
          <TextArea id="steps" name="steps" />
        </Texts>
        <CheckBoxes>
          {diets.map((diet) => (
            <Label key={diet.id} htmlFor={diet.id}>
              <CheckBox
                onChange={() => CheckOnChange(diet.id)}
                selected={selected.includes(diet.id)}
                key={diet.id}
                type="checkbox"
                id={diet.id}
              />
              {diet.name}
            </Label>
          ))}
        </CheckBoxes>
        <button type="submit">Create</button>
      </Form>
    </>
  )
}
