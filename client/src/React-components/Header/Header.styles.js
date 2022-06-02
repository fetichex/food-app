import styled from 'styled-components'
import { color } from '../../styles/variables.styles'

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  height: 15vh;
  background-color: ${color.blue};
`
export const Logo = styled.div`
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 3rem;

  h1 {
    margin: 0;
    font-size: 3rem;
    color: ${color.beige};
  }
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 33.33%;

  button {
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    border: none;
    outline: none;
    background-color: ${color.beige};
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 50%;
  }
`
