import styled from 'styled-components'
import { BarChartData } from './index'

const Container = styled.div`
  display: flex;
`

const ChartItem = styled.div<BarChartData>`
  width: ${props => props.value}%;
  min-width: 10px;
  height: 8px;
  background: ${props => props.color};
  margin: 2px;
  &:first-child{
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child{
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

export default { Container, ChartItem }
