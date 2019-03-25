import styled from 'styled-components'
import { rhythm } from 'src/typography'
import Color from 'color'

const Button = styled.button`
  text-decoration: none;
  font-weight: 600;
  flex-grow: 0;
  padding: ${rhythm(1 / 4)} ${rhythm(1 / 2)};
  text-align: center;
  display: inline-block;
  border: solid 2px
    ${props =>
      Color(props.theme.color.secondary.main)
        .lighten(0.1)
        .hex()};
  outline: none;
  border-radius: 50px;
  box-shadow: 0 5px 0
    ${props =>
      Color(props.theme.color.primary.dark)
        .darken(0.6)
        .hex()};
  background: ${props => props.theme.color.secondary.main};
  cursor: pointer;
  color: black;
  :hover {
    text-decoration: none;
    background: ${props =>
      Color(props.theme.color.secondary.main)
        .lighten(0.3)
        .hex()};
  }
  :active {
    box-shadow: none;
    position: relative;
    top: 3px;
  }
`

export default Button
