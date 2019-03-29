import React, { Component } from 'react'
import Testimonials from 'src/components/testimonials'
import Layout from 'src/components/layout'
import { testimonials } from 'src/data'
import { rhythm } from 'src/typography'
import styled from 'styled-components'
import TaglineSection from 'src/components/tagline-section'
import theme from 'src/theme'
import { TestimonialHorizontal } from 'src/components/testimonial'

const Container = styled.section`
  padding-top: ${rhythm(4)};
  background: ${theme.color.primary.lightest};
`

const Testimonails = styled.div`
  padding: 0 ${rhythm(2)};
  .wrapper {
    padding-bottom: ${rhythm(1)};
  }
`

class TestimonialsPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <TaglineSection
            colors={{
              backgroundColor: theme.color.primary.lightest,
              textColor: theme.color.primary.dark,
            }}
            crazyTextRange={2}
            align='left'
            title={<>Testimonials.</>}
            subtitle={`Here's what these lovely people have said about me.`}
          />
          <Testimonails>
            {testimonials.map((t, i) => (
              <div key={i} className='wrapper'>
                <TestimonialHorizontal {...t} text={t.comment} fullComment />
              </div>
            ))}
          </Testimonails>
        </Container>
      </Layout>
    )
  }
}

export default TestimonialsPage
