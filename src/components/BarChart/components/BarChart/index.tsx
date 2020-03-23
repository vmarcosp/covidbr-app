import React from 'react'
import Styled from './styles'

export interface BarChartData {
  color: string
  value: number
}

interface BarChartProps {
  data: BarChartData[]
}

const sum = (total: number, item: BarChartData) => item.value + total

const sumTotal = (items: BarChartData[]) => items.reduce(sum, 0)

const getValue = (value: number, total: number) => (value * 100) / total

export const BarChart = ({ data }: BarChartProps) => {
  const total = sumTotal(data)
  return (
    <Styled.Container>
      {data.map((item, index) => (
        <Styled.ChartItem
          value={getValue(item.value, total)}
          color={item.color}
          key={index}
        />
      ))}
    </Styled.Container>
  )
}

