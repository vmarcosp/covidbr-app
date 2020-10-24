import styled, { css } from 'styled-components'
import { xs, sm } from 'css/media-query'

export interface GlobalDataContainerProps {
  show: boolean
}

const commonContainerStyle = css`
  width: 100%;
  box-sizing: border-box;
  ${xs(css`
    padding: 16px;
  `)}
  ${sm(css`
    box-sizing: border-box;
    padding: 24px;
    margin-bottom: 32px;
  `)}
`

const GlobalDataContainer = styled.div<GlobalDataContainerProps>`
  ${commonContainerStyle};
  ${props => xs(css`
    opacity: ${props.show ? 1 : 0};
    transition: 400ms;
  `)}
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
