import styled, { css } from 'styled-components'
import { colors } from 'css/theme'
import { xs, sm } from 'css/media-query'


interface ToggleableProps {
  isOpen: boolean
}

const Container = styled.div<ToggleableProps>`
  background: ${colors.white};
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  ${xs(css`
    box-sizing: border-box;
    position: fixed;
    z-index: 999;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    transition: 300ms;
    width: 100%;
    left: 0;
  `)}

  ${sm(css`
    width: 400px;
    z-index: 999;
    position: fixed;
    left: 24px;
    top: 120px;
    border-radius: 4px;
  `)}

  @media (max-height: 700px) {
    height: 400px;
    bottom: ${props => props.isOpen ? 0 : -200}px;
	}

  @media (min-height: 700px) and (max-height: 900px) {
    height: 450px;
    bottom: ${props => props.isOpen ? 0 : -225}px;
	}
`

const Arrow = styled.img<ToggleableProps>`
position: absolute;
width: 42px;
top: -32px;
left: 50%;
margin-left: -21px;
transition: 200ms;
transform: ${
  props => props.isOpen
    ? css`rotate(180deg)`
    : css`rotate(0)`
  };
`

const ArrowButton = styled.button`
${
  sm(css`
    display: none;
  `)
  }
background: 0;
outline: 0;
margin: 0;
padding: 0;
border: 0;
`

export default { Container, Arrow, ArrowButton }
