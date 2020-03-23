import React from 'react'
import Styled from './styles'
import { formatToNumber } from 'brazilian-values'

export interface MetricProps {
  label: string
  value: number
}

export const Metric = ({ label, value }: MetricProps) => (
  <Styled.Container>
    <Styled.Label>{label}</Styled.Label>
    <Styled.Value>{formatToNumber(value)}</Styled.Value>
  </Styled.Container>
)
