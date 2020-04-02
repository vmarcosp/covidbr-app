import styled from 'styled-components'
import { BarChartData } from './index'

const Container = styled.div`
  display: flex;
`

const ChartItem = styled.div<BarChartData>`
  width: ${props => props.totalValue}%;
  min-width: 12px;
  height: 12px;
  background: ${props => props.color};
  margin: 2px;
  border-radius: 10px;
`

export default { Container, ChartItem }
