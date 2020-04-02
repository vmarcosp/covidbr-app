import 'mutationobserver-shim'
import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { render, findByTestId } from '@testing-library/react'

import { BrazilData } from './'
import { GET_BRAZIL_DATA_QUERY } from '../../hooks/useBrazilData/GetBrazilData'

const mock = {
  request: {
    query: GET_BRAZIL_DATA_QUERY,
    variables: {
      test: 1
    }
  },
  result: {
    data: {
      brazil: {
        totalDeaths: 244,
        totalCases: 6931,
        totalRecovered: 127,
        closedCases: 371,
        activeCases: 6560,
        __typename: 'Brazil'
      }
    }
  }
}

describe('<BrazilData />', () => {
  test('deve renderizar os dados corretamente', async () => {
    const { getByTestId, container } = render(
      <MockedProvider mocks={[mock]}>
        <BrazilData />
      </MockedProvider>
    )

    expect(getByTestId('loader')).toBeDefined()

    await findByTestId(container, 'brazil-data-container')

    expect(getByTestId('card-subtitle')).toHaveTextContent('6.931 casos')
    expect(getByTestId('active-cases')).toHaveTextContent(/6.560/)
    expect(getByTestId('total-recovered')).toHaveTextContent(/127/)
    expect(getByTestId('total-deaths')).toHaveTextContent(/244/)
  })
})
