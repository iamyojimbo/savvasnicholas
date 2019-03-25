// @flow

import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled, { withTheme } from 'styled-components'
import posed from 'react-pose'
import Header from 'src/components/header'
import Layout from 'src/components/layout'
import SEO from 'src/components/seo'
import theme from 'src/theme'
import logo from 'src/images/sn-logo-full.svg'
import titleText from 'src/images/title-text.svg'
import downCaret from 'src/images/down-caret.svg'
import { rhythm, scale } from 'src/typography'
import TaglineSection from 'src/components/tagline-section'
import Color from 'color'
import CrazyText from 'src/components/crazy-text'
import StripeBox from 'src/components/stripe-box'
import ContactMe from 'src/components/contact-me'

const Container = styled.section`
  padding: ${rhythm(2)};
  background: ${theme.color.primary.dark};
`

const ThankYouPage = () => (
  <Layout>
    <SEO title='Thank You' />
    <Container>
      <TaglineSection
        title={'Thank You!'}
        subtitle={`I aim to get back to all requests as soon as I can!`}
        colors={{
          backgroundColor: theme.color.primary.dark,
          textColor: theme.color.contrast.main,
        }}
        align={'left'}
      />
    </Container>
  </Layout>
)

export default ThankYouPage
