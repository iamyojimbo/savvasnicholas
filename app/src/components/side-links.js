import styled from 'styled-components'
import { rhythm } from 'src/typography'
import React from 'react'
import { IconContext } from 'react-icons'
import {
  FaAngellist,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from 'react-icons/fa'

export const SideLinksContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-content: space-around;
  flex-wrap: wrap;
  max-width: ${rhythm(3.75)};
  a {
    color: ${props => props.theme.color.contrast.main};
    margin-left: ${rhythm(1 / 2)};
    height: ${rhythm(3 / 4)};
    width: ${rhythm(3 / 4)};
    transition-duration: 0.25s;
    display: flex;
  }
  a:visited {
    color: ${props => props.theme.color.contrast.main};
  }
  a:hover {
    color: ${props => props.theme.color.secondary.main};
  }

  a:hover,
  a:active,
  a:focus {
    transform: scale(1.3);
  }
`
const sideLinkSize = rhythm(3 / 4)

const linksList = [
  {
    href: 'mailto:savvas@savvasnicholas.com',
    icon: <FaEnvelope />,
  },
  {
    href: 'https://stackoverflow.com/users/1772238/iamyojimbo',
    target: '_blank',
    icon: <FaStackOverflow />,
  },
  {
    href: 'https://github.com/iamyojimbo',
    target: '_blank',
    icon: <FaGithub />,
  },
  {
    href: 'https://www.linkedin.com/in/iamyojimbo/',
    target: '_blank',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://angel.co/savvas-nicholas/',
    target: '_blank',
    icon: <FaAngellist />,
  },
]

const SideLink = ({ icon, iconSize, ...props }) => (
  <a {...props}>{React.cloneElement(icon, { size: iconSize })}</a>
)

const SideLinks = () => (
  <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
    <SideLinksContainer>
      {linksList.map((link, index) => (
        <SideLink key={index} iconSize={sideLinkSize} {...link} />
      ))}
    </SideLinksContainer>
  </IconContext.Provider>
)

export default SideLinks
