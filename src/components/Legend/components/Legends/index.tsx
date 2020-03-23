import React from 'react'
import { MetricProps, Metric } from 'components/Metric/components/Metric'
import Styled, { IndicatorProps } from './styles'

type LegendProps = MetricProps & IndicatorProps;

export const Legend = ({ label, value, color }: LegendProps) => (
  <Styled.Container>
    <Styled.Indicator color={color} />
    <Metric label={label} value={value} />
  </Styled.Container>
)
