import { Btn, Name } from './Button.styles'

const Button = ({ name, action }) => {
  return (
    <>
      <Btn whileTap={{ scale: 0.9 }} onClick={() => action}>
        <Name>{name}</Name>
      </Btn>
    </>
  )
}

export default Button
