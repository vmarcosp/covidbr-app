import { OptionType } from 'components/Autocomplete/hooks/types'

export interface StateData {
  name: string
  cases: number
  casesMS: number
  casesNotConfirmedByMS: number
  deaths: number
  latitude: number
  longitude: number
}

export interface CityData {
  name: string
  uf: string
  cases: number
  casesMS: number
  casesNotConfirmedByMS: number
  deaths: number
  latitude: number
  longitude: number
}

export interface StateQuery {
  state: StateData
}

export interface CityQuery {
  city: CityData
}

export interface SelectedData {
  show: boolean,
  infos: CityData | StateData | null
}
