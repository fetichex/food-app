import { Btn, Name } from './button.styles'

export const Button = ({ name, action }) => {
  return (
    <>
      <Btn
        whileTap={{ scale: 0.9 }}
        onClick={() => action}>
        <Name>{name}</Name>
      </Btn>
    </>
  )
}
