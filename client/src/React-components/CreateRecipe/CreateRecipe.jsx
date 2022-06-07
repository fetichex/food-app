import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
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
  const [validateTitle, setValidateTitle] = useState('')
  const [validateSummary, setValidateSummary] = useState('')
  const [validateHealth, setValidateHealth] = useState('')

  useEffect(() => {
    dispatch(getDiets())
  }, [dispatch])

  /* eslint-disable */
  const regexValidate = (e) => {
    switch (e.target.name) {
      case 'title':
        !e.target.value.match(/^[a-zA-ZÀ-ÿ\s]{3,80}$/)
          ? setValidateTitle('block')
          : setValidateTitle('')
        break
      case 'summary':
        !e.target.value.match(/^[a.0-z-A-Z/,À-ÿ\s]{10,255}$/)
          ? setValidateSummary('block')
          : setValidateSummary('')
        break
      case 'health':
        !e.target.value.match(/^\b([0-9]|[1-9][0-9]|100)\b$/gm)
          ? setValidateHealth('block')
          : setValidateHealth('')
        break
      default:
        setValidateTitle('')
        setValidateSummary('')
    }
  }
  /* eslint-enable */

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
      healthScore: e.target.health.value,
      steps: e.target.steps.value,
      diets: selected
    }
    return values
  }

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
                error={validateTitle}
              />
            </DivTitle>
            <DivHealth>
              <LabelHealth htmlFor="health">
                health
                <br />
                score
              </LabelHealth>
              <Health
                type="number"
                id="health"
                name="health"
                onBlur={regexValidate}
                error={validateHealth}
                min={0}
                max={100}
                placeholder="0-100"
              />
            </DivHealth>
          </Inputs>
          <MessageContainer display={validateHealth}>
            <IconWarning />
            <Message>Only numbers between 0 and 100</Message>
          </MessageContainer>
          <MessageContainer display={validateTitle}>
            <IconWarning />
            <Message>Only letters and spaces, min 3, max 255</Message>
          </MessageContainer>
          <Label htmlFor="summary">summary</Label>
          <TextArea
            id="summary"
            name="summary"
            onBlur={regexValidate}
            error={validateSummary}
          />
          <MessageContainer display={validateSummary}>
            <IconWarning />
            <Message>Required fild</Message>
          </MessageContainer>
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
