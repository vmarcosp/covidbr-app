import React from 'react'
import { BarChart } from './'
import { render } from '@testing-library/react'

describe('<BarChart />', () => {
  test('deve renderizar corretamente os dados', () => {
    const values = [
      {
        color: '#000000',
        totalValue: 100
      },
      {
        color: '#ffffff',
        totalValue: 50
      }
    ]

    const { container } = render(
      <BarChart
        data={values}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
