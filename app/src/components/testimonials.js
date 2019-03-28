import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import { rhythm, scale } from 'src/typography'
import Color from 'color'
import Carousel from 'nuka-carousel'
import { TweenLite, TimelineLite, CSSPlugin } from 'gsap/all'
const plugins = [TweenLite, CSSPlugin]
import Verge from 'verge'

const itemWidth = 8
const itemMargin = 1
const scrollContainerPadding = 2
const getWidth = nItems => {
  const padding = 2 * scrollContainerPadding
  const contentWidth = nItems * itemWidth + (nItems - 1) * itemMargin
  return padding + contentWidth
}

const Container = styled.div`
  width: ${({ nShow, isMobile }) => isMobile ? 'inherit' : rhythm(getWidth(nShow) - 1.5)};
  overflow-x: scroll;
  padding: ${rhythm(1)} 0;
  text-align: left;
`

const ScrollContainer = styled.div`
  padding: 0 ${rhythm(scrollContainerPadding)};
  width: ${({ nItems }) => rhythm(getWidth(nItems))};
  display: flex;
  align-items: flex-start;
`

class TestimonialComp extends Component {
  render() {
    const { className, name, role, company, comment, _ref } = this.props
    return (
      <div className={className} ref={_ref}>
        <div className='top'>
          <h3>{name}</h3>
          <h4>{role}</h4>
          <h5>{company}</h5>
        </div>
        <p>"{comment}"</p>
      </div>
    )
  }
}

const Testimonial = styled(TestimonialComp)`
  opacity: 1;
  margin-right: ${rhythm(itemMargin)};
  :last-child {
    margin: 0;
  }
  width: ${rhythm(8)};
  background: ${props => props.theme.color.contrast.main};
  .top {
    background: ${props => props.theme.color.primary.main};
    padding: ${rhythm(1 / 2)};
    border: 1px solid
      ${props =>
        Color(props.theme.color.primary.main)
          .lighten(0.2)
          .hex()};
    border-bottom: none;
  }

  h3,
  h4,
  h5 {
    margin-bottom: ${rhythm(1 / 4)};
  }

  h4,
  h5 {
    color: ${props => props.theme.color.contrast.main};
  }

  h3 {
    color: ${props => props.theme.color.secondary.main};
  }
  p {
    color: ${props => props.theme.color.primary.dark};
    margin: 0;
    ${scale(1 / 8)};
    font-weight: 600;
    padding: ${rhythm(1 / 2)};
    border: 1px solid
      ${props =>
        Color(props.theme.color.contrast.main)
          .darken(0.1)
          .hex()};
    border-top: none;
  }

  li.slide-visible {
    color: pink;
  }
`

const testimonials = [
  {
    name: 'Stefan Knight',
    role: 'Director',
    company: 'JSJ Smart Homes',
    comment: `Savvas is a rare find, extremely intelligent and creative but also really
              a blast to work with!! Would highly recommend him in any capacity,
              especially one that is intellectually stimulating.`,
  },
  {
    name: 'Sam Parlett',
    role: 'Co-Founder',
    company: 'Shield Diagnostics',
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.`,
  },
  {
    name: 'Fred Turner',
    role: 'Co-Founder',
    company: 'Shield Diagnostics',
    comment: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
  },
  {
    name: 'Stefan Knight',
    role: 'Director',
    company: 'JSJ Smart Homes',
    comment: `Savvas is a rare find, extremely intelligent and creative but also really
              a blast to work with!! Would highly recommend him in any capacity,
              especially one that is intellectually stimulating.`,
  },
]

class Testimonials extends Component {
  state = {
    currentSlide: 0,
  }
  timer
  scrollContainerRef = React.createRef()

  nextSlide = () => {
    const nextSlide = (this.state.currentSlide + 1) % testimonials.length
    this.setState({ currentSlide: nextSlide })
    console.log(this)
  }

  componentDidMount() {
    // this.timer = setInterval(this.nextSlide, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const isMobile = Verge.viewportW() <= this.props.theme.breakpoints.tablet
    return (
      <Container nShow={3} isMobile={isMobile}>
        <ScrollContainer
          nItems={testimonials.length}
          ref={div => (this.scrollContainerRef = div)}
        >
          {testimonials.map((t, i) => (
            <Testimonial key={i} {...t} />
          ))}
        </ScrollContainer>
      </Container>
    )
  }
}

export default withTheme(Testimonials)
