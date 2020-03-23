import React, { useRef } from 'react'
import { formatToNumber } from 'brazilian-values'
import { Doughnut } from 'react-chartjs-2'
import { colors } from 'css/theme'
import { CardTitle } from 'components/CardTitle'
import { Number } from 'components/Number'
import { CardSubtitle } from 'components/CardSubtitle'
import { Legend } from 'components/Legend'
import { BarChart } from 'components/BarChart'

import Styled from './styles'
import { useBrazilData } from '../../hooks/useBrazilData'

export const BrazilData = () => {
  const brazilData = useBrazilData()
  console.log(brazilData)
  return (
    <div>
      <CardTitle>
        Brasil
      </CardTitle>
      <CardSubtitle>
        <Number>{formatToNumber(brazilData.totalCases)}</Number> casos
      </CardSubtitle>
      <br />
      <Styled.ChartContainer>
        <BarChart
          data={[
            {
              color: colors.blue,
              value: brazilData.activeCases
            },
            {
              color: colors.yellow,
              value: brazilData.totalRecovered
            },
            {
              color: colors.red,
              value: brazilData.totalDeaths
            }
          ]}
        />
      </Styled.ChartContainer>

      <Styled.MetricsContainer>
        <Legend
          color={colors.blue}
          label='Ativos'
          value={brazilData.activeCases}
        />

        <Legend
          color={colors.yellow}
          label='Curados'
          value={brazilData.totalRecovered}
        />

        <Legend
          color={colors.red}
          label='Óbitos'
          value={brazilData.totalDeaths}
        />
      </Styled.MetricsContainer>
    </div>
  )
}

