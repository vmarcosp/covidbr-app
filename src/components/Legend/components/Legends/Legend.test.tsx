import React from 'react'
import { Legend } from './index'
import { render } from '@testing-library/react'

describe('<Legend />', () => {
  test('deve renderizar corretamente uma legenda do tipo "line"', () => {
    const { container } = render(
      <Legend
        indicatorType='line'
        label='Casos'
        total={10}
        color='#000000'
      />
    )

    expect(container).toMatchSnapshot()
  })

  test('deve renderizar corretamente uma legenda do tipo "circle"', () => {
    const { container } = render(
      <Legend
        indicatorType='circle'
        label='Casos'
        total={10}
        color='#000000'
      />
    )

    expect(container).toMatchSnapshot()
  })
})
