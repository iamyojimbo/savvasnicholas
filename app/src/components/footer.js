// @flow
import React from 'react'
import styled from 'styled-components'
import logoIcon from 'src/images/sn-logo-full.svg'
import { rhythm } from 'src/typography'
import SideLinks from 'src/components/side-links'
import Logo from 'src/components/logo'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  height: ${rhythm(3)};
  padding: ${rhythm(0.5)};
  background: ${props => props.theme.color.primary.dark};
  .container {
    margin: 0;
    height: 100%;
  }
`

const Footer = () => (
  <FooterContainer>
    <div className='container'>
      <Logo withText />
    </div>
    <SideLinks />
  </FooterContainer>
)

export default Footer
