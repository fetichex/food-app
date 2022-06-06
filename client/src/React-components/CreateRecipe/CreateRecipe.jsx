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
  CheckBoxes,
  Message,
  MessageContainer,
  Text,
  Buttons,
  Button,
  LinkContainer,
  BtnCancel,
  IconWarning
} from './CreateRecipe.styles'

export const CreateRecipe = () => {
  const dispatch = useDispatch()
  const diets = useSelector((state) => selectDiets(state))
  const [selected, setSelected] = useState([])
  const [validate, setValidate] = useState('')

  const regexValidate = (e) => {
    switch (e.target.name) {
      case 'title':
        !e.target.value.match(/^[a-zA-ZÀ-ÿ\s]{3,255}$/)
          ? setValidate('block')
          : setValidate('')
        break
      case 'summary':
        !e.target.value.match(/^[a.0-z-A-Z/,À-ÿ\s]{10,255}$/)
          ? setValidate('block')
          : setValidate('')
        break
      default:
        setValidate('')
    }
  }

  const CheckOnChange = (id) => {
    const find = selected.indexOf(id)

    if (find > -1) {
      selected.splice(find, 1)
    } else {
      selected.push(id)
    }
    setSelected([...selected])
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
              <Title
                onBlur={regexValidate}
                type="text"
                id="title"
                name="title"
              />
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
          <MessageContainer display={validate}>
            <IconWarning />
            <Message>Only letters and spaces, min 3, max 255</Message>
          </MessageContainer>
          <Label htmlFor="summary">summary</Label>
          <TextArea id="summary" name="summary" onBlur={regexValidate} />
          <Label htmlFor="steps">step to step</Label>
          <TextArea id="steps" name="steps" />
        </Texts>
        <div>
          <Label htmlFor="diets">diets</Label>
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
        </div>
        <Buttons>
          <Button type="submit">Create</Button>
          <LinkContainer>
            <BtnCancel to={'/home'}>
              <Text>Cancel</Text>
            </BtnCancel>
          </LinkContainer>
        </Buttons>
      </Form>
    </>
  )
}
