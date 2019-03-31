//@flow
import React, { Component } from 'react'
import Color from 'color'
import { array } from 'prop-types'
import SplitText from 'src/gsap-plugins/SplitText'
import { TimelineLite, TimelineMax, Circ } from 'gsap/all'
import { Waypoint } from 'react-waypoint'

type State = {
  elements: array,
  pose: string,
}
type Props = {
  children: any,
  baseColor: any,
  mode: string,
  range: number,
  rightEntry: boolean,
}

class CrazyText extends Component<Props, State> {
  static defaultProps = {
    mode: 'lighten',
    range: 1,
    rightEntry: false,
  }
  state = {
    elements: [],
    pose: 'light',
  }
  textToSplitElement = null
  entryTimeline = null

  randomColorsAnimation(elements: any) {
    const self = this
    const colorObj = new Color(this.props.baseColor)
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

  componentDidMount() {
    const elements = new SplitText(this.textToSplitElement)
    this.randomColorsAnimation(elements)

    this.entryTimeline = new TimelineLite({ paused: true }).staggerFrom(
      elements.lines,
      2,
      {
        autoAlpha: 0,
        delay: 0.2,
        x: this.props.rightEntry ? 100 : -100,
      },
      0.1
    )
  }

  render() {
    return (
      <Waypoint
        onEnter={() => this.entryTimeline.play()}
        onLeave={() => this.entryTimeline.reverse()}
      >
        <span ref={x => (this.textToSplitElement = x)}>
          {this.props.children}
        </span>
      </Waypoint>
    )
  }
}

export default CrazyText
