import { Input, Label, Check } from './CheckBox.styles'
const CheckBox = ({ name }) => {
  return (
    <>
      <Check>
        <Input type="checkbox" id={name} />
        <Label htmlFor={name}>{name}</Label>
      </Check>
    </>
  )
}

export default CheckBox
