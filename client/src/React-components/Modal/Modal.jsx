import { useDispatch } from 'react-redux'
import { closeModal } from '../../redux/modalSlice'
import { ModalContainer, Card, BtnContainer, Button } from './Modal.styles'

export const Modal = () => {
  const dispatch = useDispatch()

  return (
    <ModalContainer>
      <Card>
        <h4>Recipe has been created.</h4>
        <BtnContainer>
          <Button
            type="button"
            onClick={() => {
              dispatch(closeModal())
            }}>
            confirm
          </Button>
        </BtnContainer>
      </Card>
    </ModalContainer>
  )
}
