import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import { rhythm, scale } from 'src/typography'
import { testimonials } from 'src/data'
import { SeeAllTestimonials, Testimonial } from 'src/components/testimonial'
import Verge from 'verge'
import { Waypoint } from 'react-waypoint'
import { TimelineLite } from 'gsap/all'

const Container = styled.div`
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  padding: ${rhythm(1)} 0;
  text-align: left;
  ::-webkit-scrollbar {
    display: none;
  }
`

const Wrapper = styled.div`
  & + & {
    padding-left: ${rhythm(1)};
  }
`

const ScrollContainer = styled.div`
  display: flex;
  align-items: flex-start;

  .subWrapper {
    padding: 0 ${rhythm(2)};
    display: inline-flex;
  }
`

class Testimonials extends Component {
  elements = []
  timeline = new TimelineLite({ paused: true })

  componentDidMount() {
    // this.timer = setInterval(this.nextSlide, 2000)
    this.timeline.staggerFrom(
      this.elements,
      1,
      {
        y: 20,
        delay: 0.2,
        autoAlpha: 0,
      },
      0.2
    )
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const isMobile = Verge.viewportW() <= this.props.theme.breakpoints.tablet
    return (
      <>
        <Waypoint
          onEnter={() => this.timeline.play()}
          onLeave={() => this.timeline.reverse()}
        />
        <Container>
          <ScrollContainer nItems={testimonials.length}>
            <div className='subWrapper'>
              {testimonials.map((t, i) => (
                <Wrapper key={i}>
                  <Testimonial
                    key={i}
                    {...t}
                    text={t.extract}
                    _ref={e => (this.elements[i] = e)}
                  />
                </Wrapper>
              ))}
              <Wrapper key={testimonials.length}>
                <SeeAllTestimonials
                  _ref={e => (this.elements[testimonials.length] = e)}
                />
              </Wrapper>
            </div>
          </ScrollContainer>
        </Container>
      </>
    )
  }
}

export default withTheme(Testimonials)
