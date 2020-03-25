import React from 'react'
import { formatToNumber } from 'brazilian-values'
import { colors } from 'css/theme'

import { CardTitle } from 'components/CardTitle/components/CardTitle'
import { Number } from 'components/Number/components/Number'
import { CardSubtitle } from 'components/CardSubtitle/components/CardSubtitle'
import { Legend } from 'components/Legend/components/Legends'
import { BarChart } from 'components/BarChart/components/BarChart'
import { Loader } from 'components/Loader/components/Loader'

import Styled from './styles'
import { useBrazilData } from '../../hooks/useBrazilData'

export const BrazilData = () => {
  const { brazilData, loading } = useBrazilData()
  return (
    !loading
      ? <div>
        <CardTitle> Brasil </CardTitle>

        <CardSubtitle>
          <Number>{formatToNumber(brazilData.totalCases)}</Number> casos
        </CardSubtitle>

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
      : <Loader size={6} />
  )
}
