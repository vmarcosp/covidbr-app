import styled from 'styled-components'

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`

const ChartContainer = styled.div`
  margin-top: 16px
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
