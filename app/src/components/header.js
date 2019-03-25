// @flow
import { Link } from 'gatsby'
import logoIcon from 'src/images/sn-logo.svg'
import React from 'react'
import styled from 'styled-components'
import { rhythm } from 'src/typography'
import Button from 'src/components/button'
import Headroom from 'react-headroom'
import SideLinks from 'src/components/side-links'

const HeaderContainer = styled.header`
  padding: ${rhythm(1 / 2)};
  display: flex;
  height: ${rhythm(3)};
  background: ${props => props.theme.color.primary.dark};
  width: 100%;
  top: 0;
  right: 0;
  justify-content: space-between;

  .sideLinks {
    height: 100%;
    ${props => props.theme.media.phone`
      display: none;
    `}
  }
`

const HeaderLogoIcon = styled.img`
  height: 100%;
  flex-grow: 0;
`

const HeaderLogoIconLink = styled(Link)`
  height: 100%;
  flex-grow: 0;
  display: block;
  z-index: 2;
  margin-right: ${rhythm(3)};
  ${props => props.theme.media.phone`
    margin-right: 0;
  `}
`

const HeaderNav = styled.nav`
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 0;
`

const HeaderNavItem = styled.div`
  padding: 0 ${rhythm(1 / 2)};
`

const HeaderNavLink = styled(Link)`
  color: ${props => props.theme.color.contrast.main};
  font-weight: bolder;
  text-decoration: none;
  text-align: center;
  display: block;
  :hover {
    text-decoration: underline;
    color: white;
  }
`

const Header = ({ onContactMeClick }) => {
  return (
    <Headroom>
      <HeaderContainer>
        <HeaderLogoIconLink to='/'>
          <HeaderLogoIcon src={logoIcon} />
        </HeaderLogoIconLink>
        <HeaderNav>
          <HeaderNavItem>
            <HeaderNavLink to='/who-i-am'>Who I am.</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <Button onClick={onContactMeClick} to='/#contact-me' as={Link}>
              Contact me.
            </Button>
          </HeaderNavItem>
        </HeaderNav>
        <div className='sideLinks'>
          <SideLinks />
        </div>
      </HeaderContainer>
    </Headroom>
  )
}

export default Header
