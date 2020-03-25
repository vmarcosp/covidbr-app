import styled, { css } from 'styled-components'
import { fontFamily, colors } from 'css/theme'
import { xs, sm } from 'css/media-query'

const Container = styled.div`
  position: absolute;
  display: flex;
  top: -42px;
  padding: 8px 12px;
  border-radius: 4px;
  background: ${colors.white};
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  ${xs(css`
    right: 12px;
  `)}

  ${sm(css`
    right: 0;
  `)}
`

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`

const Icon = styled.img`
  margin-right: 6px;
  ${xs(css`
    width: 14px;
  `)}

  ${sm(css`
    width: 16px;
  `)}
`

const Label = styled.div`
  font-family: ${fontFamily};
  font-weight: 600;
  color: ${colors.gray};
  ${xs(css`
    font-size: 14px;
  `)}

  ${sm(css`
    font-size: 16px;
  `)}
`

export default { Container, Item, Label, Icon }
