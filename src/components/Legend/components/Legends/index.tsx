import React from 'react'
import { MetricProps, Metric } from 'components/Metric/components/Metric'
import Styled, { IndicatorProps } from './styles'

type IndicatorType = 'circle' | 'vertical'

type LegendProps = MetricProps & IndicatorProps & {
  indicatorType?: IndicatorType
}


export const Legend = ({ label, value, color, indicatorType = 'vertical' }: LegendProps) => (
  <Styled.Container>
    {indicatorType === 'circle'
      ? <Styled.CircleIcon color={color} />
      : <Styled.VerticalIcon color={color} />
    }
    <Metric label={label} value={value} />
  </Styled.Container>
)
