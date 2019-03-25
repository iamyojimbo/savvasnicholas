import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import theme from '../theme'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	   text-rendering: optimizeLegibility;
  }
`

class Layout extends React.Component {
  render() {
    const { children, onContactMeClick } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyle />
              <Header onContactMeClick={onContactMeClick} />
              <main>{children}</main>
              <Footer />
            </>
          </ThemeProvider>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
