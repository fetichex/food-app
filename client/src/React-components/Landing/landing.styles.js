import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { color } from '../../styles/variables.styles'

const mixinSize = css`
  width: 100%;
  height: 100vh;
`

const mixinFlex = (
  direction = 'row',
  align = 'center',
  justify = 'center'
) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`

export const Title = styled.h1`
  color: ${color.black};
`

export const Container = styled.div`
  ${mixinFlex(null, null, 'space-between')}
  margin-inline: auto;
  width: 90%;
  height: 100vh;
`

export const LinkContainer = styled(motion.div)`
  ${mixinFlex()}
  cursor: pointer;
  width: 300px;
  height: 50px;
  border: 2px solid ${color.red};
  border-radius: 1rem;
`

export const GoToHome = styled(Link)`
  ${mixinFlex()}
`

export const Text = styled.p`
  margin: 0;
  color: ${color.black};
  font-size: 2rem;
  text-transform: uppercase;
`

export const ImgContainer = styled(motion.div)`
  ${mixinSize}
  ${mixinFlex()}
  overflow: hidden;
`
export const ImgLanding = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const Main = styled.div`
  ${mixinSize}
  ${mixinFlex('column')}
`
