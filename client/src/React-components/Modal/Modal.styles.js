import styled from 'styled-components'
import color from '../../styles/variables.styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Card = styled.div`
  background: ${color.beige};
  width: 80vw;
  max-width: 400px;
  border-radius:  0.25rem;
  padding: 2rem 1rem;
  text-align: center;

  h4 {
    margin-bottom: 0;
    line-height: 1.5;
  }
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
export const Button = styled.button`
  text-transform: uppercase;
  background: ${color.blue};
  color: ${color.beige};
  padding: 0.375rem 0.75rem;
  letter-spacing:  0.25rem;
  display: inline-block;
  font-weight: 700;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`
