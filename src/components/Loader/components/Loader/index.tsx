import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from 'css/theme'

interface LoaderProps {
  size: number
}

const Bubble = styled.div<LoaderProps>`
  @keyframes loading {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }

    40% {
    box-shadow: 0 2.5em 0 0;
    }
  }

  animation: loading 2s infinite ease-in-out;
  animation-delay: ${2 * -0.16}s;
  animation-fill-mode: both;
  border-radius: 50%;
  color: ${colors.green};
  font-size: ${props => `${props.size}px`};
  height: 2.5em;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  width: 2.5em;

  &:before {
    animation: loading 2s infinite ease-in-out;
    animation-delay: ${2 * -0.32}s;
    animation-fill-mode: both;
    border-radius: 50%;
    content: '';
    height: 2.5em;
    left: -3.5em;
    position: absolute;
    top: 0;
    width: 2.5em;
  }

  &:after {
    animation: loading 2s infinite ease-in-out;
    animation-fill-mode: both;
    border-radius: 50%;
    content: '';
    height: 2.5em;
    left: 3.5em;
    position: absolute;
    top: 0;
    width: 2.5em;
  }
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Loader = (props: LoaderProps) => (
  <Container>
    <Bubble {...props} />
  </Container>
)
