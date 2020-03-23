import styled, { css } from 'styled-components'
import { colors } from 'css/theme'


interface ToggleableProps {
  isOpen: boolean
}

const Container = styled.div<ToggleableProps>`
  padding: 24px 16px;
  box-sizing: border-box;
  height: calc(100% - 200px);
  position: fixed;
  z-index: 999;
  background: ${colors.white};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  bottom:${props => props.isOpen
    ? 0 : css`
    calc(((100% - 200px) / 2) * -1);
  `};
  transition: 300ms;
  left:0;
  width: 100%;
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

export default { Container, Arrow }
