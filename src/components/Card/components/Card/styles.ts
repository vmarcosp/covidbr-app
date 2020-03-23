import styled, { css } from 'styled-components'
import { colors } from 'css/theme'
import { xs, sm } from 'css/media-query'


interface ToggleableProps {
  isOpen: boolean
}

const getBottom = (props: ToggleableProps) =>
  props.isOpen
    ? 0
    : 'calc(((100% - 300px) / 2) * -1)'

const Container = styled.div<ToggleableProps>`
  background: ${colors.white};
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  ${props => xs(css`
    padding: 24px 16px;
    box-sizing: border-box;
    height: calc(100% - 300px);
    position: fixed;
    z-index: 999;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    transition: 300ms;
    width: 100%;
    left: 0;
    bottom: ${getBottom(props)};
  `)}
  ${sm(css`
    width: 400px;
    background: white;
    z-index: 999;
    position: fixed;
    left: 24px;
    top: 120px;
    border-radius: 4px;
  `)}
`

const Arrow = styled.img<ToggleableProps>`
  position: absolute;
  width: 42px;
  top: -32px;
  left: 50%;
  margin-left: -21px;
  transition: 200ms;
  transform: ${props => props.isOpen
    ? css`rotate(180deg)`
    : css`rotate(0)`
  };
`

const ArrowButton = styled.button`
  ${sm(css`
    display: none;
  `)}
  background: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  border: 0;
`

export default { Container, Arrow, ArrowButton }
