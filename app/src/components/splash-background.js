import React, { Component } from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'

const Container = styled.div`
  background: #43434d;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  // background: linear-gradient(
  //   black 0%,
  //   transparent 30%,
  //   ${props => props.theme.color.primary.dark} 100%
  // );
  background: linear-gradient(
    #0d0d0d,
    ${props => props.theme.color.primary.dark} 30%,
    ${props => props.theme.color.primary.lightest}
  );
  
  .particles {
    ${props => props.theme.media.phone`
      display: none;
    `}
  }
`

class SplashBackground extends Component {
  render() {
    return (
      <Container>
        <Particles
          className='particles'
          params={{
            retina_detect: true,
            particles: {
              color: {
                value: '#fff',
              },
              number: {
                value: 160,
              },
              size: {
                value: 2,
              },
              line_linked: {
                enable: true,
                distance: 50,
                color: '#dfbb4f',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: true,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },

            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: ['bubble', 'repulse'],
                },
              },
              modes: {
                bubble: { size: 5 },
                repulse: { distance: 50 },
              },
            },
          }}
        />
      </Container>
    )
  }
}

export default SplashBackground
