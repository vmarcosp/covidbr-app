import styled, { css } from 'styled-components'
import { xs } from 'css/media-query'

export interface GlobalDataContainerProps {
  show: boolean
}

const commonContainerStyle = css`
  padding: 24px;
  margin-bottom: 32px;
`

const GlobalDataContainer = styled.div<GlobalDataContainerProps>`
  ${props => xs(css`
    opacity: ${props.show ? 1 : 0};
    transition: 400ms;
  `)}
  ${commonContainerStyle};
`

const DataContainer = styled.div`
  ${commonContainerStyle};
`

const Divider = styled.div`
  width: 100%;
  height: 3px;
  background: #F2F5FA;
`

export default { GlobalDataContainer, Divider, DataContainer }
