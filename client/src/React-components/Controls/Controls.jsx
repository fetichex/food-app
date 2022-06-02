import CheckBox from '../CheckBox/CheckBox'
import { Container } from './Controls.styles'

const orders = ['a - z', 'z - a']

const Controls = () => {
  return (
    <>
      <Container>
        {orders.map((order, i) => (
          <CheckBox key={i} name={order} />
        ))}
      </Container>
    </>
  )
}

export default Controls
