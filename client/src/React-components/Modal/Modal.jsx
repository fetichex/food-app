import { useDispatch } from 'react-redux'
import { closeModal } from '../../redux/modalSlice'
import { ModalContainer, Modal, BtnContainer, Button } from './Modal.styles'

export const Modal = () => {
  const dispatch = useDispatch()

  return (
    <ModalContainer>
      <Modal>
        <h4>remove all items from your shopping cart?</h4>
        <BtnContainer>
          <Button
            type="button"
            onClick={() => {
              dispatch(closeModal())
            }}>
            confirm
          </Button>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  )
}
