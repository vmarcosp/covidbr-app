import styled from 'styled-components'

export interface IndicatorProps {
  color: string
}

const Container = styled.div`
  display: flex;
`

const VerticalIcon = styled.div<IndicatorProps>`
  width: 5px;
  background: ${props => props.color};
  margin-right: 6px;
`

const CircleIcon = styled.div<IndicatorProps>`
  width: 8px;
  height: 8px;
  margin-top: 3px;
  border-radius: 50%;
  background: ${props => props.color};
  margin-right: 3px;
`

export default { Container, VerticalIcon, CircleIcon }
