//@flow
import React, { Component } from 'react'
import Color from 'color'
import { array } from 'prop-types'
import SplitText from 'src/gsap-plugins/SplitText'
import { TimelineMax, Circ } from 'gsap/all'

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
  textToSplitElement = null
  timeline = null

  componentDidMount() {
    const elements = new SplitText(this.textToSplitElement)
    this.setState({ elements })
    this.timeline = new TimelineMax({})
    const colorObj = new Color(this.props.baseColor)
    const toColor = colorObj[this.props.mode](this.props.range)

    const self = this

    let i = 0
    elements.chars.forEach(char => {
      ;(function animate() {
        const duration = Math.random() * 0.5 + 0.3
        new TimelineMax()
          .to(char, duration, {
            startAt: { color: self.props.baseColor },
            delay: Math.random() * 0.5 + 0.01,
            ease: Circ.easeIn,
            color: colorObj[self.props.mode](
              self.props.range * Math.random()
            ).hex(),
          })
          .addPause('+=' + (Math.random() + 0.1))
          .addCallback(animate)
      })()
    })
  }

  render() {
    return (
      <span ref={x => (this.textToSplitElement = x)}>
        {this.props.children}
      </span>
    )
  }
}

export default CrazyText
