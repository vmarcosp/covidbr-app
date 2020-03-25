import React from 'react'
import QueueAnim from 'rc-queue-anim'

import Styled from './styles'
import logoImage from './logo.svg'
import githubImage from './github-logo.svg'

const Navbar = () => (
  <Styled.Container>
    <QueueAnim
      type={'left'}
      duration={600}
      delay={400}
    >
      <Styled.Logo key={1} src={logoImage} alt="COVIDBR Logo" />
    </QueueAnim>

    <QueueAnim
      type='right'
      duration={600}
      delay={400}
    >
      <a href="https://github.com/vmarcosp/covidbr-app" rel="noopener noreferrer" target="_blank">
        <Styled.GithubIcon src={githubImage} alt="Github Logo" />
      </a>
    </QueueAnim>
  </Styled.Container>
)

export default Navbar
