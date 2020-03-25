export enum OptionType {
  STATE,
  CITY
}

export interface Option {
  label: string
  value: {
    id: string
    type: OptionType
  }
}

export interface CityData {
  id: string
  name: string
  uf: string
}

export interface StateData {
  name: string
  uf: string
}

export interface QueryResult {
  cities: CityData[]
  states: StateData[]
}
