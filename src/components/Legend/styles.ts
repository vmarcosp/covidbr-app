import styled from 'styled-components'

export interface IndicatorProps {
  color: string
}

const Container = styled.div`
  display: flex;
`

const Indicator = styled.div<IndicatorProps>`
  width: 5px;
  background: ${props => props.color};
  margin-right: 6px;
`

export default { Container, Indicator }
