export interface BrazilData {
  totalDeaths: number
  totalCases: number
  totalRecovered: number
  closedCases: number,
  activeCases: number
}

export interface BrazilDataQuery {
  brazil: BrazilData
}
