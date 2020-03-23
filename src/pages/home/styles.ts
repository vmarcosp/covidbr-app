import styled from 'styled-components'

export interface GlobalDataContainerProps {
  show: boolean
}

const GlobalDataContainer = styled.div<GlobalDataContainerProps>`
  opacity: ${props => props.show ? 1 : 0};
  transition: 400ms;
`

export default { GlobalDataContainer }
