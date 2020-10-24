import React from 'react'
import S from './styles'

export interface BarChartData {
  color: string
  totalValue: number
}

interface BarChartProps {
  data: BarChartData[]
}

const sum = (total: number, item: BarChartData) => item.totalValue + total

const toPct = (value: number, total: number) => (value * 100) / total

export const BarChart = ({ data }: BarChartProps) => {
  const total = data.reduce(sum, 0)

  return (
    <S.Container>
      {data.map((item, index) => (
        <S.ChartBarContainer totalValue={toPct(item.totalValue, total)} key={index}>
          <S.ChartPercentage>
            {toPct(item.totalValue, total).toFixed(0)}%
          </S.ChartPercentage>
          <S.ChartItem color={item.color} />
        </S.ChartBarContainer>
      ))}
    </S.Container>
  )
}
