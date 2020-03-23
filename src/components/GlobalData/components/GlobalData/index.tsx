import React from 'react'
import { formatToNumber } from 'brazilian-values'
import { colors } from 'css/theme'
import { CardTitle } from 'components/CardTitle/components/CardTitle'
import { Number } from 'components/Number/components/Number'
import { CardSubtitle } from 'components/CardSubtitle/components/CardSubtitle'
import { Legend } from 'components/Legend/components/Legends'
import { BarChart } from 'components/BarChart/components/BarChart'

import Styled from './styles'
import { useGlobalData } from '../../hooks/useGlobalData'

export const GlobalData = () => {
  const globalData = useGlobalData()
  return (
    <div>
      <CardTitle>
        Global
      </CardTitle>
      <CardSubtitle>
        <Number>{formatToNumber(globalData.totalCases)}</Number> casos
      </CardSubtitle>
      <br />
      <Styled.ChartContainer>
        <BarChart
          data={[
            {
              color: colors.blue,
              value: globalData.activeCases
            },
            {
              color: colors.yellow,
              value: globalData.totalRecovered
            },
            {
              color: colors.red,
              value: globalData.totalDeaths
            }
          ]}
        />
      </Styled.ChartContainer>

      <Styled.MetricsContainer>
        <Legend
          color={colors.blue}
          label='Ativos'
          value={globalData.activeCases}
        />

        <Legend
          color={colors.yellow}
          label='Curados'
          value={globalData.totalRecovered}
        />

        <Legend
          color={colors.red}
          label='Óbitos'
          value={globalData.totalDeaths}
        />
      </Styled.MetricsContainer>
    </div>
  )
}

