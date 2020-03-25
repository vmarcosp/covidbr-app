import { colors, fontFamily } from 'css/theme'
import { xs } from 'css/media-query'
import styled, { css } from 'styled-components'

export const CardTitle = styled.h3`
  color: ${colors.black};
  font-family: ${fontFamily};
  margin: 2px 0;
  ${xs(css`
    font-size: 22px;
  `)}
`
