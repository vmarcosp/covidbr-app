import { CSSProperties } from 'styled-components'
import { StylesConfig } from 'react-select'
import { colors } from 'css/theme'

export const customStyles: StylesConfig = {
  singleValue: (provided: CSSProperties) => ({
    ...provided,
    color: colors.black
  }),
  valueContainer: (provided: CSSProperties) => ({
    ...provided,
    padding: 14
  }),
  input: (provided: CSSProperties) => ({
    ...provided,
    border: 0
  }),
  placeholder: (provided: CSSProperties) => ({
    ...provided,
    color: colors.gray,
    fontWeight: 500
  }),
  control: (provided: CSSProperties) => ({
    ...provided,
    fontSize: '18px',
    boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)',
    border: 0
  }),
  indicatorSeparator: (provided: CSSProperties) => ({
    ...provided,
    background: '#F2F5FA',
    margin: '0x!important'
  }),
  noOptionsMessage: (provided: CSSProperties) => ({
    ...provided,
    fontSize: 16,
    color: colors.black,
    padding: 14
  }),
  clearIndicator: (provided: CSSProperties) => ({
    ...provided,
    '> svg': {
      width: 25,
      height: 25
    }
  })
}
