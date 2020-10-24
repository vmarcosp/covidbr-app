import React from 'react'
import S from './styles'

export interface BarChartData {
  color: string
  totalValue: number
}

interface BarChartProps {
  data: BarChartData[]
}

const sumData = (total: number, item: BarChartData) => item.totalValue + total
const toPercentage = (value: number, total: number) => (value * 100) / total

export const BarChart = ({ data }: BarChartProps) => {
  const total = data.reduce(sumData, 0)

  return (
    <S.Container>
      {data.map(({ color, totalValue }, index) => (
        <S.BarChartContainer totalValue={toPercentage(totalValue, total)} key={index}>
          <S.BarChartPercentage>
            {toPercentage(totalValue, total).toFixed(0)}%
          </S.BarChartPercentage>
          <S.BarChartProgress color={color} />
        </S.BarChartContainer>
      ))}
    </S.Container>
  )
}
