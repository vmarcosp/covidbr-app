import React, { useRef } from 'react'
import { formatToNumber } from 'brazilian-values'
import { colors } from 'css/theme'

import { CityData, StateData } from 'pages/home/types'
import { OptionType } from 'components/Autocomplete/hooks/types'
import { CardTitle } from 'components/CardTitle/components/CardTitle'
import { Number } from 'components/Number/components/Number'
import { CardSubtitle } from 'components/CardSubtitle/components/CardSubtitle'
import { Legend } from 'components/Legend/components/Legends'
import { BarChart } from 'components/BarChart/components/BarChart'

import Styled from './styles'

interface SelectedDataProps {
  data: CityData | StateData
}

export const SelectedData = ({ data }: SelectedDataProps) => {
  return (
    <div>
      <CardTitle>
        {data.name}
      </CardTitle>
      <CardSubtitle>
        <Number>{formatToNumber(data.cases)}</Number> casos
      </CardSubtitle>
      <br />
      <Styled.ChartContainer>
        <BarChart
          data={[
            {
              color: colors.blue,
              value: data.casesMS
            },
            {
              color: colors.red,
              value: data.deaths
            }
          ]}
        />
      </Styled.ChartContainer>

      <Styled.MetricsContainer>
        <Legend
          color={colors.blue}
          label='Ativos'
          value={data.casesMS}
        />
        <Legend
          color={colors.red}
          label='Óbitos'
          value={data.deaths}
        />
      </Styled.MetricsContainer>
    </div>
  )
}
