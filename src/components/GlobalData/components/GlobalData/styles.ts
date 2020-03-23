import styled from 'styled-components'

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`

const ChartContainer = styled.div`
  margin-top: 24px
`

const LegendsContainer = styled.div`
 display: flex;
 flex-flow: column wrap;
 width:100%;
`

export default { MetricsContainer, LegendsContainer, ChartContainer }
