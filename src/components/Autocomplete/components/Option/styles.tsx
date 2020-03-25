import styled, { css } from 'styled-components'
import { colors } from 'css/theme'

interface ContainerProps {
  selected: boolean
}

const Container = styled.div<ContainerProps>`
  padding: 14px;
  color: #878787;  
  display: flex;
  font-size: 16px;
  align-items: center;
  cursor: pointer;
  
  ${props => props.selected && css`
    color: ${colors.black};
  `}

  &:hover {
    background: #f2f2f2;
  }
`

const Icon = styled.img`
  width: 16px;
  margin-right: 12px;
`

export default { Container, Icon }
