import styled, { css } from 'styled-components'
import { colors } from 'css/theme'
import { xs, sm } from 'css/media-query'

interface ContainerProps {
  isOpen: boolean
  visible: boolean
}

const Container = styled.div<ContainerProps>`
  background: ${colors.white};
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  flex-flow: column wrap;
  justify-content: space-around;

  ${props => xs(css`
    display: ${props.visible ? 'flex' : 'none'};
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
    display: flex;
    width: 400px;
    z-index: 999;
    position: fixed;
    left: 24px;
    bottom: 42px;
    border-radius: 4px;
    min-height: 455px;
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

const ArrowIcon = styled.img`
  ${xs(css`
    @keyframes jumping {
      0% {
        top: 12px;
      }

      50% {
        top: 18px;
      }

      100% {
        top: 12px;
      }
    }
    position: absolute;
    width: 22px;
    top: 12px;
    left: 50%;
    margin-left: -11px;
    animation: jumping 1s infinite;
  `)}

  ${sm(css`
    display: none;
  `)}
`

export default { Container, ArrowIcon }
