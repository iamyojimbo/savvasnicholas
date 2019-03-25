//@flow
import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import _ from 'lodash'
import Color from 'color'
import { array } from 'prop-types'

const Letters = posed.span({
  light: {},
  dark: {},
})

const Letter = posed(styled.span`
  color: ${props => props.minColor};
`)({
  dark: {
    color: ({ minColor }) => minColor,
    transition: () => ({
      duration: Math.random() * 500 + 50,
      delay: Math.random() * 500 + 10,
    }),
  },
  light: {
    color: ({ maxColor }) => maxColor,
    transition: () => ({
      duration: Math.random() * 500 + 50,
      delay: Math.random() * 500 + 10,
    }),
  },
})

type State = {
  elements: array,
  pose: string,
}
type Props = {
  children: any,
  baseColor: any,
  mode: string,
  range: number,
}

class CrazyText extends Component<Props, State> {
  static defaultProps = {
    mode: 'lighten',
    range: 1,
  }
  state = {
    elements: [],
    pose: 'light',
  }
  timeout = null

  generateElements() {
    let { children, baseColor } = this.props
    const baseColorObj = Color(baseColor)
    let childrenText
    if (!children.props) {
      childrenText = [children]
    } else {
      childrenText = children.props.children
    }
    const letters = _(childrenText)
      .map(child => (_.isString(child) ? Array.from(child) : child))
      .flatten()
      .map((child, i) => {
        const num = Math.random() / this.props.range
        let newColor = null
        switch (this.props.mode) {
          case 'lighten':
            newColor = baseColorObj.lighten(num).hex()
            break
          case 'darken':
          default:
            newColor = baseColorObj.darken(num).hex()
        }
        return (
          <Letter
            num={num}
            minColor={baseColorObj.hex()}
            maxColor={newColor}
            key={i}
          >
            {child}
          </Letter>
        )
      })
      .value()
    return letters
  }

  togglePose() {
    this.setState({
      pose: this.state.pose === 'light' ? 'dark' : 'light',
    })
  }

  componentDidMount() {
    const self = this
    ;(function loop() {
      const rand = Math.round(Math.random() * 500) + 100
      self.timeout = setTimeout(function() {
        self.togglePose()
        loop()
      }, rand)
    })()

    this.setState({ elements: this.generateElements() })
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout)
  }

  render() {
    return (
      <Letters initialPose='light' pose={this.state.pose}>
        {this.state.elements}
      </Letters>
    )
  }
}

export default CrazyText
