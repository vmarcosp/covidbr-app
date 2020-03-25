import styled, { css } from 'styled-components'
import { fontFamily } from 'css/theme'
import { sm, xs } from 'css/media-query'

const Container = styled.div`
  position: fixed;
  font-family: ${fontFamily};
  z-index: 999;
  ${xs(css`
    top: 70px;
    width: calc(100%  - 32px);
    left: 50%;
    margin-left: calc((100%  - 32px) / 2 * -1);
  `)}

  ${sm(css`
    width: 400px;
    position: fixed;
    left: 24px;
    top: 80px;
  `)}
`

export default { Container }
