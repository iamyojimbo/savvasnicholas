// @flow

import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import Layout from 'src/components/layout'
import SEO from 'src/components/seo'
import theme from 'src/theme'
import { rhythm, scale } from 'src/typography'
import TaglineSection from 'src/components/tagline-section'

const Container = styled.section`
  padding-bottom: ${rhythm(4)};
  padding-top: ${rhythm(6)};
  background: ${theme.color.primary.dark};
`

const ThankYouPage = () => (
  <Layout>
    <SEO title='Thank You' />
    <Container>
      <TaglineSection
        title={
          <>
            Thank
            <br />
            you.
          </>
        }
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
