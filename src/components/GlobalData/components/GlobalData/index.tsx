import React from 'react'
import QueueAnim from 'rc-queue-anim'
import { formatToNumber } from 'brazilian-values'
import { colors } from 'css/theme'
import { CardTitle } from 'components/CardTitle/components/CardTitle'
import { Number } from 'components/Number/components/Number'
import { CardSubtitle } from 'components/CardSubtitle/components/CardSubtitle'
import { Legend } from 'components/Legend/components/Legends'
import { BarChart } from 'components/BarChart/components/BarChart'
import { Loader } from 'components/Loader/components/Loader'

import Styled from './styles'
import { useGlobalData } from '../../hooks/useGlobalData'

export const GlobalData = () => {
  const { globalData, loading } = useGlobalData()
  return (
    loading
      ? <Loader data-testid='loader' size={6} />
      : <QueueAnim
        data-testid='global-data-container'
        type='bottom'
        delay={500}
        duration={800}
      >
        <CardTitle key={1}>
          Global
        </CardTitle>

        <CardSubtitle data-testid='card-subtitle' key={2}>
          <Number>{formatToNumber(globalData.totalCases)}</Number> casos
        </CardSubtitle>

        <Styled.ChartContainer key={3}>
          <BarChart
            data={[
              {
                color: colors.blue,
                totalValue: globalData.activeCases
              },
              {
                color: colors.yellow,
                totalValue: globalData.totalRecovered
              },
              {
                color: colors.red,
                totalValue: globalData.totalDeaths
              }
            ]}
          />
        </Styled.ChartContainer>

        <QueueAnim
          component={Styled.MetricsContainer}
          type='bottom'
          delay={800}
          duration={600}
        >
          <Legend
            data-testid='active-cases'
            key={1}
            color={colors.blue}
            label='Ativos'
            total={globalData.activeCases}
          />

          <Legend
            data-testid='total-recovered'
            key={2}
            color={colors.yellow}
            label='Curados'
            total={globalData.totalRecovered}
          />

          <Legend
            data-testid='total-deaths'
            key={3}
            color={colors.red}
            label='Óbitos'
            total={globalData.totalDeaths}
          />
        </QueueAnim>
      </QueueAnim>
  )
}
