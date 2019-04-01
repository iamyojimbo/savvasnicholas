// @flow
import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import Particles from 'react-particles-js'
import Verge from 'verge'

const Container = styled.div`
  background: #43434d;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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

type Props = {
  theme: any,
}

type State = {
  width: number,
}

class SplashBackground extends Component<Props, State> {
  state = { width: 0 }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => this.setState({ width: Verge.viewportW() })

  render() {
    const showParticles = this.state.width > this.props.theme.breakpoints.phone
    return (
      <Container>
        {showParticles && (
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
        )}
      </Container>
    )
  }
}

export default withTheme(SplashBackground)
