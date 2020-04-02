import 'mutationobserver-shim'
import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { render, findByTestId } from '@testing-library/react'

import { GlobalData } from './'
import { GET_GLOBAL_DATA_QUERY } from '../../hooks/useGlobalData/GetGlobalData'

const mock = {
  request: {
    query: GET_GLOBAL_DATA_QUERY,
    variables: {}
  },
  result: {
    data: {
      global: {
        totalDeaths: 244,
        totalCases: 6931,
        totalRecovered: 127,
        closedCases: 371,
        activeCases: 6560,
        __typename: 'Global'
      }
    }
  }
}

describe('<GlobalData />', () => {
  test('deve renderizar os dados corretamente', async () => {
    const { getByTestId, container } = render(
      <MockedProvider mocks={[mock]}>
        <GlobalData />
      </MockedProvider>
    )

    expect(getByTestId('loader')).toBeDefined()

    await findByTestId(container, 'global-data-container')

    expect(getByTestId('card-subtitle')).toHaveTextContent('6.931 casos')
    expect(getByTestId('active-cases')).toHaveTextContent(/6.560/)
    expect(getByTestId('total-recovered')).toHaveTextContent(/127/)
    expect(getByTestId('total-deaths')).toHaveTextContent(/244/)
  })
})
