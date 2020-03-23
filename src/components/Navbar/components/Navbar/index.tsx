import React from 'react'
import Styled from './styles'
import logoImage from './logo.svg'
import githubImage from './github-icon.png'

const Navbar = () => (
  <Styled.Container>
    <Styled.Logo src={logoImage} alt="COVID-19 Logo" />
    <a href="https://github.com/vmarcosp/covid-19" target="_blank">
      <Styled.GithubIcon src={githubImage} alt="Github Logo" />
    </a>
  </Styled.Container>
)

export default Navbar
