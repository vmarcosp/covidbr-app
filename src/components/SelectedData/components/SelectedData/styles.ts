import styled from 'styled-components'

const MetricsContainer = styled.div`
  display: flex;
  margin-top: 16px;
  > * {
    margin-right: 32px;
  }
`

const ChartContainer = styled.div`
  margin-top: 24px;
`

const LegendsContainer = styled.div`
 display: flex;
 flex-flow: column wrap;
 width:100%;
`

const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  &:nth-child(1) {
    margin-right: 36px;
  }
`

export default { MetricsContainer, LegendsContainer, ItemContainer, ChartContainer }
