import styled from 'styled-components'
import { colors } from 'css/theme'

const Logo = styled.img`
  width: 120px;
`

const GithubIcon = styled.img`
  width: 30px;
`

const Container = styled.div`
  padding: 0 16px;
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 70px;
  z-index:999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`

export default { Logo, Container, GithubIcon }
