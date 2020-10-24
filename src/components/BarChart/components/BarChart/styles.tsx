import styled from 'styled-components'
import { fontFamily } from 'css/theme'

const Container = styled.div`
  width: 100%;
  display: flex;
`
const ChartBarContainer = styled.div<{totalValue: number}>`
  width: ${({ totalValue }) => totalValue.toFixed(0)}%;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
`

const ChartItem = styled.div<{color: string}>`
  height: 12px;
  border-radius: 10px;
  background: ${({ color }) => color};
`

const ChartPercentage = styled.span`
  margin-bottom: 4px;
  font-family: ${fontFamily};
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
`

export default { Container, ChartItem, ChartBarContainer, ChartPercentage }
