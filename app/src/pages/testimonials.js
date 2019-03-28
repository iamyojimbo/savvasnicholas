import React, { Component } from 'react'
import Testimonials from 'src/components/testimonials'
import Layout from 'src/components/layout'

class TestimonialsPage extends Component {
  render() {
    return (
      <Layout>
        <div style={{paddingTop: '10em'}}>
          <Testimonials/>
        </div>
      </Layout>
    )
  }
}

export default TestimonialsPage