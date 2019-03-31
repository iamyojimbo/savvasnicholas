//@flow
import React, { Component } from 'react'
import Color from 'color'
import { array } from 'prop-types'
import SplitText from 'src/gsap-plugins/SplitText'
import { TimelineLite, TimelineMax, Circ } from 'gsap/all'
import { Waypoint } from 'react-waypoint'

type State = {
  elements: array,
  isPaused: boolean,
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
    isPaused: false,
  }
  textToSplitElement = null
  entryTimeline = null
  randomTimelines = []

  randomColorsAnimation(elements: any) {
    const self = this
    const colorObj = new Color(this.props.baseColor)
    elements.chars.forEach((char, i) => {
      ;(function animate() {
        const duration = Math.random() * 0.5 + 0.3
        self.randomTimelines[i] = new TimelineMax({
          autoRemoveChildren: true,
          paused: self.state.isPaused,
        })
          .to(char, duration, {
            startAt: { color: self.props.baseColor },
            delay: Math.random() * 0.5 + 0.01,
            ease: Circ.easeIn,
            color: colorObj[self.props.mode](
              self.props.range * Math.random()
            ).hex(),
          })
          .addPause('+=' + (Math.random() + 0.1))
          .call(animate)
      })()
    })
  }

  handleEnter = () => {
    this.entryTimeline.play()
    this.setState({ isPaused: false })
    this.randomTimelines.forEach(tl => tl.play())
  }

  handleExit = () => {
    this.entryTimeline.reverse()
    this.setState({ isPaused: true })
    this.randomTimelines.forEach(tl => tl.pause())
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
      <Waypoint onEnter={this.handleEnter} onLeave={this.handleExit}>
        <span ref={x => (this.textToSplitElement = x)}>
          {this.props.children}
        </span>
      </Waypoint>
    )
  }
}

export default CrazyText
