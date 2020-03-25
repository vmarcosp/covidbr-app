import styled from 'styled-components'
import { fontFamily } from 'css/theme'

const Container = styled.div`
  font-family: ${fontFamily};
  position: fixed;
  top: 120px;
  left: 500px;
  z-index: 999;
  width: 500px;
`

export default { Container }
