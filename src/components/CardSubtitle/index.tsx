import { colors, fontFamily } from 'css/theme'
import { xs } from 'css/media-query'
import styled, { css } from 'styled-components'

export const CardSubtitle = styled.span`
  color: ${colors.gray};
  font-family: ${fontFamily};
  
  ${xs(css`
    font-weight: 600;
    font-size: 20px;
  `)}
`
