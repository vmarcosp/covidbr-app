import React from 'react'
import Styled from './styles'
import logoImage from './logo.svg'
import githubImage from './github-logo.svg'

const Navbar = () => (
  <Styled.Container>
    <Styled.Logo src={logoImage} alt="COVIDBR Logo" />
    <a href="https://github.com/vmarcosp/covidbr-app" rel="noopener noreferrer" target="_blank">
      <Styled.GithubIcon src={githubImage} alt="Github Logo" />
    </a>
  </Styled.Container>
)

export default Navbar
