import React from 'react'
import Styled from './styles'

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
    <Styled.Container>
      {data.map((item, index) => (
        <Styled.ChartItem
          totalValue={toPct(item.totalValue, total)}
          color={item.color}
          key={index}
        />
      ))}
    </Styled.Container>
  )
}
