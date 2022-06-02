import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  width: 350px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`
export const Info = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 190px;
  border-radius: 5px;
  background: #333;
  opacity: 0;
  z-index: 1;
  transition: opacity 0.2s;

  &:hover {
    transition: opacity 0.2s;
    opacity: 0.8;
  }
`

export const DietsContainer = styled.div`
  padding: 0 5px 5px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  line-height: 1;

  h3 {
    margin: 15px 0;
    padding: 0;
    font-size: 1.2rem;
    color: #fff;
  }

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }
`
export const Name = styled.h2`
  padding: 0 5px;
  margin: 10px 0 0 0;
  color: #fff;
  opacity: 1;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`

export const Diets = styled.p`
  padding: 5px;
  margin: 0 5px;
  color: #fff;
  opacity: 1;
  text-align: center;
  font-size: 0.8rem;
  border: 1px solid #fff;
  border-radius: 5px;
`

export const Image = styled.img`
  min-width: 100%;
  object-fit: contain;
`
