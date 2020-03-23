import styled, { css } from 'styled-components'
import { Number } from 'components/Number/components/Number'
import { colors, fontFamily } from 'css/theme'
import { xs } from 'css/media-query'

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`

const Label = styled.span`
  font-weight: 500;
  color: ${colors.gray};
  font-family: ${fontFamily};
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  ${xs(css`
    font-size: 14px;
  `)}
`

const Value = styled(Number)`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  margin:0;
  padding:0;
  color: ${colors.black};
  line-height: 27px;
`

export default { Container, Label, Value }
