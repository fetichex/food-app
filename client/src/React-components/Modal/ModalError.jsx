import { useDispatch } from 'react-redux'
import { closeModal } from '../../redux/modalSlice'
import { ModalContainer, Card, BtnContainer, Button } from './Modal.styles'

export const ModalError = () => {
  const dispatch = useDispatch()

  return (
    <ModalContainer>
      <Card>
        <h4>enter the valid information and try again.</h4>
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
