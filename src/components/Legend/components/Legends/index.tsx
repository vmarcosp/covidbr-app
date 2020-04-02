import React from 'react'
import { MetricProps, Metric } from 'components/Metric/components/Metric'
import Styled, { IndicatorProps } from './styles'

type IndicatorType = 'circle' | 'vertical'

type LegendProps = MetricProps & IndicatorProps & {
  indicatorType?: IndicatorType
}

export const Legend = ({ label, total, color, indicatorType = 'vertical', ...props }: LegendProps) => (
  <Styled.Container {...props}>
    {indicatorType === 'circle'
      ? <Styled.CircleIcon color={color} />
      : <Styled.VerticalIcon color={color} />
    }
    <Metric label={label} total={total} />
  </Styled.Container>
)
