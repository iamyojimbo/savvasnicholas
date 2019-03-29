import { Component } from 'react'
import styled from 'styled-components'
import { rhythm, scale } from 'src/typography'
import Color from 'color'
import React from 'react'
import { Link } from 'gatsby'
import { HeaderNavLink } from 'src/components/header'

class TestimonialComp extends Component {
  render() {
    const { className, name, role, company, text, _ref } = this.props
    return (
      <div className={className} ref={_ref}>
        <div className='top'>
          <h3>{name}</h3>
          <h4>{role}</h4>
          <h5>{company}</h5>
        </div>
        <p>"{text}"</p>
      </div>
    )
  }
}

export const Testimonial = styled(TestimonialComp)`
  opacity: 1;
  width: ${rhythm(10)};
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

export const TestimonialHorizontal = styled(Testimonial)`
  width: 100%;
  ${({ theme }) => theme.mediaMin.phone`
    display: flex;
    .top {
      flex-grow: 0;
      min-width: ${rhythm(7)};
      border: 1px solid
        ${props =>
          Color(props.theme.color.primary.main)
            .lighten(0.2)
            .hex()};
      border-right: none;
    }
  
    p {
      border: 1px solid
        ${props =>
          Color(props.theme.color.contrast.main)
            .darken(0.1)
            .hex()};
      border-left: none;
    }
  `}
`

const SeeAllTestimonialsComp = ({ className }) => (
  <div className={className}>
    <div className='content'>
      <HeaderNavLink to='/testimonials'>See more...</HeaderNavLink>
    </div>
  </div>
)

export const SeeAllTestimonials = styled(SeeAllTestimonialsComp)`
  width: ${rhythm(10)};
  background: ${props => props.theme.color.primary.main};
  align-self: stretch;
  height: 100%;
  max-height: ${rhythm(10)};
  min-height: ${rhythm(6)};
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    text-align: center;
    padding: 0 ${rhythm(2)};
    ${scale(3 / 4)};
  }
`
