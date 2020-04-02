import React from 'react'
import Styled from './styles'
import { formatToNumber } from 'brazilian-values'

export interface MetricProps {
  label: string
  total: number
}

export const Metric = ({ label, total }: MetricProps) => (
  <Styled.Container>
    <Styled.Label>{label}</Styled.Label>
    <Styled.Value>{formatToNumber(total)}</Styled.Value>
  </Styled.Container>
)
