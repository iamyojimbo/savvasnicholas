import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import { rhythm, scale } from 'src/typography'
import Color from 'color'
import Carousel from 'nuka-carousel'
import { TweenLite, TimelineLite, CSSPlugin } from 'gsap/all'
const plugins = [TweenLite, CSSPlugin]
import Verge from 'verge'

const Container = styled.div`
  //display: flex;
  //justify-content: center;
  //flex-wrap: wrap;
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
  render() {
    const isMobile = Verge.viewportW() <= this.props.theme.breakpoints.phone
    const slidesToShow = isMobile ? 1 : 2
    const transitionMode = isMobile ? 'scroll' : 'scroll3d'
    return (
      <>
        <Container>
          <Carousel
            slideIndex={1}
            slidesToShow={slidesToShow}
            framePadding={rhythm(1 / 4)}
            autoplay
            autoplayInterval={2000}
            cellSpacing={20}
            transitionMode={transitionMode}
            wrapAround
            renderBottomCenterControls={null}
            renderCenterLeftControls={null}
            renderCenterRightControls={null}
          >
            {testimonials.map((t, i, a) => (
              <Testimonial
                key={i}
                {...t}
              />
            ))}
          </Carousel>
        </Container>
      </>
    )
  }
}

export default withTheme(Testimonials)
