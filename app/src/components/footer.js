// @flow
import React from 'react'
import styled from 'styled-components'
import logoIcon from 'src/images/sn-logo-full.svg'
import { rhythm } from 'src/typography'
import SideLinks from 'src/components/side-links'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  height: ${rhythm(3)};
  padding: ${rhythm(0.5)};
  background: ${props => props.theme.color.primary.dark};
  img {
    margin: 0;
    height: 100%;
  }
`

const Footer = () => (
  <FooterContainer>
    <img src={logoIcon} />
    <SideLinks />
  </FooterContainer>
)

export default Footer
