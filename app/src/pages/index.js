// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from 'src/components/layout'
import SEO from 'src/components/seo'
import downCaret from 'src/images/down-caret.svg'
import theme from 'src/theme'
import { rhythm, scale } from 'src/typography'
import TaglineSection from 'src/components/tagline-section'
import CrazyText from 'src/components/crazy-text'
import StripeBox from 'src/components/stripe-box'
import ContactMe from 'src/components/contact-me'
import Logo from 'src/components/logo'
import SplashBackground from 'src/components/splash-background'
import { pageYOffsetSafe } from 'src/helpers'
import { TweenLite, ScrollToPlugin } from 'gsap/all'
import Testimonials from 'src/components/testimonials'
const plugins = [ScrollToPlugin]

const Splash = styled.div`
  position: relative;
  // background: ${props => props.theme.color.primary.dark};
  background: linear-gradient(${props =>
    props.theme.color.primary.dark} 10%, 80%, ${props =>
  props.theme.color.primary.light});
  background-size: cover;
  height: 100vh;
  min-height: ${rhythm(21)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: ${rhythm(2)};
  padding-bottom: ${rhythm(1)};

  ${props => props.theme.media.tablet`
    padding-left: ${rhythm(2)};
    padding-right: ${rhythm(2)};
    padding-bottom: ${rhythm(4)};
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
  z-index: 999;
  margin: auto 0 0 0;
  text-align: center;
  flex-grow: 0;
  color: ${props => props.theme.color.contrast.main};
  height: ${rhythm(1)};
  cursor: pointer;
`

const Section1 = styled.section`
  background: #9a9a9a;
  margin: 0;
  padding-top: ${rhythm(0)};
  text-align: ${props => props.align};
  box-shadow: 0px -4px ${props => props.theme.color.primary.dark};
`

const WhatIDo = styled.section`
  padding-top: ${rhythm(2)};
  //background: ${props => props.theme.color.primary.lightest};
  background: linear-gradient(
    ${props => props.theme.color.primary.lightest},
    ${props => props.theme.color.primary.lightest});
  .container {
    width: 50%;
    margin: auto;
    padding-bottom: ${rhythm(2)};
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
`

const SectionTitle = styled.h2`
  margin: auto auto 0;
  ${scale(1.5)};
  line-height: ${rhythm(1.75)};
  color: ${props => props.theme.color.contrast.main};
  ${props => props.theme.media.phone`
      ${scale(0.75)};
      line-height: ${rhythm(1)};
      width: 100%;
  `}
`

const ContactMeSection = styled.section`
  background: ${props => props.theme.color.contrast.main};
  padding-bottom: ${rhythm(2)};
  box-shadow: 0px -4px ${props => props.theme.color.contrast.main};
`

const TesimonialsSection = styled.section`
  background: ${props => theme.color.primary.lightest};
`

const TestimonialsContainer = styled.div`
  width: 100%;
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
    const scrollY = pageYOffsetSafe()
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

  handleCaretClick = () => {
    TweenLite.to(window, 1, { scrollTo: { y: '#whatIDo', autoKill: false } })
  }

  render() {
    const logoScrolledOpacity = this.state.isTransitionComplete
      ? 1 - this.state.scrollRatio * 3
      : 0
    const caretScrolledOpacity = 1.2 - this.state.scrollRatio * 2
    const caretScrolledOpacityClipped =
      caretScrolledOpacity > 1 ? 1 : caretScrolledOpacity

    return (
      <Layout onContactMeClick={this.handleContactMeClick} transparentHeader>
        <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
        <Splash initialPose='none' pose='dark'>
          <SplashBackground />
          <div className='topContainer'>
            <div className='logoContainer'>
              <Logo withText />
            </div>
          </div>
          <DownCaretImg
            opacity={caretScrolledOpacityClipped}
            src={downCaret}
            onClick={this.handleCaretClick}
          />
        </Splash>
        <WhatIDo id='whatIDo'>
          <div className='container'>
            <SectionTitle>
              <span className='h2Row light'>
                <CrazyText
                  mode='lighten'
                  baseColor={theme.color.secondary.main}
                  range={0.5}
                >
                  Consultation.
                </CrazyText>
              </span>
              <span className='h2Row dark'>
                <CrazyText
                  mode='lighten'
                  baseColor={theme.color.primary.dark}
                  range={0.5}
                >
                  Custom Software.
                </CrazyText>
              </span>
              <span className='h2Row light'>
                <CrazyText
                  mode='lighten'
                  baseColor={theme.color.secondary.main}
                  range={0.5}
                >
                  Design & Development.
                </CrazyText>
              </span>
              <span className='h2Row dark'>
                <CrazyText
                  mode='lighten'
                  baseColor={theme.color.primary.dark}
                  range={0.5}
                >
                  Contracting Work.
                </CrazyText>
              </span>
            </SectionTitle>
          </div>
          <StripeBox
            colors={{
              backgroundColor: theme.color.primary.lightest,
              topStripe: theme.color.primary.lightest,
              bottomStripe: theme.color.primary.dark,
              textColor: theme.color.contrast.main,
            }}
          />
        </WhatIDo>
        <Section1>
          <TaglineSection
            crazyTextRange={0.7}
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
            crazyTextRange={0.3}
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
            crazyTextRange={0.5}
            hasBottomStripe
            colors={{
              backgroundColor: theme.color.primary.main,
              topStripe: theme.color.contrast.main,
              bottomStripe: theme.color.primary.lightest,
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
                the
                <br />
                infinite
                <br />
                world of
                <br />
                technology.
              </>
            }
            subtitle={`I specialise in advising my clients on the limitless opportunities for automation and process
            optimisation.`}
          />
        </Section1>
        <TesimonialsSection>
          <TaglineSection
            crazyTextRange={0.5}
            colors={{
              backgroundColor: theme.color.primary.lightest,
              topStripe: theme.color.contrast.main,
              bottomStripe: theme.color.contrast.main,
              textColor: theme.color.contrast.main,
            }}
            align='right'
            title={
              <>
                I<br />
                am
                <br />
                grateful
                <br />
                for the
                <br />
                following
                <br />
                eulogies.
              </>
            }
          />
          <TestimonialsContainer>
            <Testimonials />
          </TestimonialsContainer>
          <StripeBox
            colors={{
              backgroundColor: theme.color.primary.lightest,
              topStripe: theme.color.primary.lightest,
              bottomStripe: theme.color.contrast.main,
              textColor: theme.color.contrast.main,
            }}
          />
        </TesimonialsSection>
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
