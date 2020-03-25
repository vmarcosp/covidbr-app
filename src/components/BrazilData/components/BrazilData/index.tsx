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
    !loading
      ? <QueueAnim
        type='bottom'
        delay={600}
        duration={800}
      >
        <CardTitle key={1}> Brasil </CardTitle>

        <CardSubtitle key={2}>
          <Number>{formatToNumber(brazilData.totalCases)}</Number> casos
        </CardSubtitle>

        <Styled.ChartContainer key={3}>
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

        <QueueAnim
          component={Styled.MetricsContainer}
          type='bottom'
          delay={800}
          duration={600}
        >
          <Legend
            key={1}
            color={colors.blue}
            label='Ativos'
            value={brazilData.activeCases}
          />

          <Legend
            key={2}
            color={colors.yellow}
            label='Curados'
            value={brazilData.totalRecovered}
          />

          <Legend
            key={3}
            color={colors.red}
            label='Óbitos'
            value={brazilData.totalDeaths}
          />
        </QueueAnim>
      </QueueAnim>
      : <Loader size={6} />
  )
}
