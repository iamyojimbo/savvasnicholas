// @flow

import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import posed from 'react-pose'
import Header from 'src/components/header'
import Layout from 'src/components/layout'
import SEO from 'src/components/seo'
import logo from 'src/images/sn-logo-full.svg'
import titleText from 'src/images/title-text.svg'
import downCaret from 'src/images/down-caret.svg'
import theme from 'src/theme'
import { rhythm, scale } from 'src/typography'
import TaglineSection from 'src/components/tagline-section'
import Color from 'color'
import CrazyText from 'src/components/crazy-text'
import StripeBox from 'src/components/stripe-box'
import ContactMe from 'src/components/contact-me'

const Splash = styled.div`
  // background: ${props => props.theme.color.primary.dark};
  background: linear-gradient(${props =>
    props.theme.color.primary.dark} 10%, 80%, ${props =>
  props.theme.color.primary.light});
  height: 100%;
  min-height: ${rhythm(21)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: ${rhythm(1)};
  padding-bottom: ${rhythm(1)};

  ${props => props.theme.media.tablet`
    padding-left: ${rhythm(2)};
    padding-right: ${rhythm(2)};
  `}

  .topContainer {
    margin: auto;
    display: flex;
    height: 100%;
    width: 100%;
    padding-bottom: ${rhythm(0)};
    align-items: start;
  }

  .logoContainer {
    width: 50%;
    max-height: 100%;
    margin: auto;
    ${props => props.theme.media.tablet`
      width: 100%;
    `}
  }
`

const DownCaretImg = styled.img.attrs(({ opacity }) => ({
  style: {
    opacity,
  },
}))`
  margin: auto 0 0 0;
  text-align: center;
  flex-grow: 0;
  color: ${props => props.theme.color.contrast.main};
  height: ${rhythm(1)};
`

const LogoAnimate = posed(styled.img`
  display: block;
  opacity: 1;
  margin: 0;
  width: 100%;
  height: 100%;
`)({
  visible: {
    opacity: 1,
    transition: { delay: 500, duration: 1000 },
  },
  invisible: {
    opacity: 0,
    transition: { duration: 500 },
  },
})

const LogoScrolled = styled.img`
  position: absolute;
  top: 0;
  display: block;
  opacity: ${props => props.opacity || 0};
`

const Section1 = styled.section`
  background: ${props => props.theme.color.primary.dark};
  margin: 0;
  padding-top: ${rhythm(1)};
  text-align: ${props => props.align};
  box-shadow: 0px -4px ${props => props.theme.color.primary.dark};
`

const WhatIDo = styled.section`
  padding-top: ${rhythm(2)};
  background: ${props => props.theme.color.primary.light};

  .container {
    width: 50%;
    margin: auto;
    ${props => props.theme.media.phone`
      padding-left: ${rhythm(2)};
      padding-right: ${rhythm(2)};
      width: 100%;
    `}
  }

  .h2Row {
    width: 100%;
    display: block;
  }

  h2 .light {
    color: ${props => props.theme.color.secondary.main};
  }
  h2 {
    margin: auto auto ${rhythm(2)};
    ${scale(1.5)};
    line-height: ${rhythm(1.75)};
    color: ${props => props.theme.color.contrast.main};
    ${props => props.theme.media.phone`
      ${scale(0.75)};
      line-height: ${rhythm(1.25)};
      width: 100%;
    `}
  }
`

const ContactMeSection = styled.section`
  background: ${props => props.theme.color.contrast.main};
  padding-bottom: ${rhythm(2)};
`

type Props = {
  location: {
    hash: string,
  },
}

type State = {
  scrollRatio: number,
  isTransitionComplete: boolean,
}

class IndexPage extends Component<Props, State> {
  shouldAutoFocusContactMe: boolean
  contactMeRef: any

  constructor(props) {
    super(props)
    this.shouldAutoFocusContactMe = this.props.location.hash === '#contact-me'
    this.contactMeRef = React.createRef()
  }

  state = {
    scrollRatio: 0,
    isTransitionComplete: false,
  }
  handleScroll = () => {
    const height = document.documentElement.clientHeight
    const scrollY = window.pageYOffset
    const scrollRatio = scrollY / height
    this.setState({ scrollRatio })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleContactMeClick = () => {
    if (this.contactMeRef.current.focusFirstInput) {
      this.contactMeRef.current.focusFirstInput()
    }
  }

  render() {
    const logoScrolledOpacity = this.state.isTransitionComplete
      ? 1 - this.state.scrollRatio * 3
      : 0
    const caretScrolledOpacity = 1.2 - this.state.scrollRatio * 2
    const logoScrolled = (
      <LogoScrolled opacity={logoScrolledOpacity} src={logo} />
    )
    const logoAnimate = (
      <LogoAnimate
        initialPose='none'
        pose={this.state.isTransitionComplete ? 'invisible' : 'visible'}
        // onPoseComplete={() => this.setState({ isTransitionComplete: true })}
        src={logo}
      />
    )

    return (
      <Layout onContactMeClick={this.handleContactMeClick}>
        <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
        <Splash initialPose='none' pose='dark'>
          <div className='topContainer'>
            <div className='logoContainer'>
              {logoAnimate}
              {/*{logoScrolled}*/}
            </div>
          </div>
          <DownCaretImg opacity={caretScrolledOpacity} src={downCaret} />
        </Splash>
        <WhatIDo>
          <div className='container'>
            <h2>
              <span className='h2Row light'>
                <CrazyText baseColor={theme.color.secondary.main} range={1}>
                  Consultation.
                </CrazyText>
              </span>
              <span className='h2Row dark'>
                <CrazyText
                  mode={'darken'}
                  baseColor={theme.color.contrast.main}
                  range={3}
                >
                  Custom Software.
                </CrazyText>
              </span>
              <span className='h2Row light'>
                <CrazyText baseColor={theme.color.secondary.main} range={3}>
                  Design & Development.
                </CrazyText>
              </span>
              <span className='h2Row dark'>
                <CrazyText
                  mode={'darken'}
                  baseColor={theme.color.contrast.main}
                  range={3}
                >
                  Contracting Work.
                </CrazyText>
              </span>
            </h2>
          </div>
          <StripeBox
            colors={{
              backgroundColor: theme.color.primary.light,
              topStripe: theme.color.primary.dark,
              bottomStripe: theme.color.primary.dark,
              textColor: theme.color.contrast.main,
            }}
          />
        </WhatIDo>
        <Section1>
          <TaglineSection
            crazyTextRange={1}
            hasBottomStripe
            colors={{
              backgroundColor: theme.color.primary.dark,
              topStripe: theme.color.primary.dark,
              bottomStripe: theme.color.contrast.main,
              textColor: theme.color.contrast.main,
            }}
            align='left'
            title={
              <>
                I<br />
                turn
                <br />
                ideas
                <br />
                into
                <br />
                reality.
              </>
            }
            subtitle={`I work with you to advise on, and deliver, custom software solutions to
        solve your exact business problem.`}
          />
          <TaglineSection
            crazyTextRange={2}
            hasBottomStripe
            colors={{
              backgroundColor: theme.color.contrast.main,
              topStripe: theme.color.contrast.main,
              bottomStripe: theme.color.primary.main,
              textColor: theme.color.primary.main,
            }}
            align='right'
            title={
              <>
                I<br />
                deliver
                <br />
                products
                <br />
                of the
                <br />
                highest
                <br />
                quality.
              </>
            }
            subtitle={`I bring my experience as a Silicon Valley technical executive to solve problems to the world's
              highest standards, using cutting edge techniques and technology.`}
          />
          <TaglineSection
            crazyTextRange={1}
            hasBottomStripe
            colors={{
              backgroundColor: theme.color.primary.main,
              topStripe: theme.color.contrast.main,
              bottomStripe: theme.color.contrast.main,
              textColor: theme.color.contrast.main,
            }}
            align='left'
            title={
              <>
                I<br />
                provide
                <br />
                guidance
                <br />
                through
                <br />
                technology.
              </>
            }
            subtitle={`I specialise in guiding you through the infinite world of technology to achieve your business
            objectives through the use of technology.`}
          />
        </Section1>
        <ContactMeSection name='contact-me'>
          <ContactMe
            ref={this.contactMeRef}
            autoFocus={this.shouldAutoFocusContactMe}
          />
        </ContactMeSection>
      </Layout>
    )
  }
}

export default IndexPage
