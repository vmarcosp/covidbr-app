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
import { useBrazilData } from '../../hooks/useBrazilData'

export const BrazilData = () => {
  const { brazilData, loading } = useBrazilData()
  return (
    loading
      ? <Loader data-testid='loader' size={6} />
      : <QueueAnim
        data-testid='brazil-data-container'
        type='bottom'
        delay={500}
        duration={800}
      >
        <CardTitle key={1}> Brasil </CardTitle>

        <CardSubtitle data-testid='card-subtitle' key={2}>
          <Number>{formatToNumber(brazilData.totalCases)}</Number> casos
        </CardSubtitle>

        <Styled.ChartContainer key={3}>
          <BarChart
            data={[
              {
                color: colors.blue,
                totalValue: brazilData.activeCases
              },
              {
                color: colors.yellow,
                totalValue: brazilData.totalRecovered
              },
              {
                color: colors.red,
                totalValue: brazilData.totalDeaths
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
            label='Ativos'
            key={1}
            color={colors.blue}
            total={brazilData.activeCases}
          />

          <Legend
            data-testid='total-recovered'
            label='Curados'
            key={2}
            color={colors.yellow}
            total={brazilData.totalRecovered}
          />

          <Legend
            data-testid='total-deaths'
            label='Óbitos'
            key={3}
            color={colors.red}
            total={brazilData.totalDeaths}
          />
        </QueueAnim>
      </QueueAnim>
  )
}
