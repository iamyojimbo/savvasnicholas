import React from 'react'
import styled from 'styled-components'
import { rhythm, scale } from '../typography'
import { withTheme } from 'styled-components'
import CrazyText from 'src/components/crazy-text'
import StripeBox from 'src/components/stripe-box'

const TaglineContainer = styled.div`
  width: 100%;
  background: ${props => props.backgroundColor};
  .outerContainer {
    width: 50%;
    margin: auto;
    ${props => props.theme.media.phone`
      width: 100%;
      padding: ${rhythm(2)};
    `}
  }
`
const TaglineSubtitle = styled.p`
  color: ${props => props.textColor};
  font-weight: 600;
  ${scale(0.5)};
  text-align: ${props => props.align};
  padding-${props => (props.align === 'left' ? 'right' : 'left')}: 30%;
  ${props => props.theme.media.tablet`
    padding-right: 0;
    padding-left: 0;
  `}
  ${props => props.theme.media.phone`
     ${scale(1 / 8)};
     line-height: ${rhythm(3 / 4)};
  `}
`
const TaglineTitle = styled.h2`
  color: ${props => props.theme.color.secondary.main};
  text-align: ${props => props.align};
  white-space: nowrap;
  ${scale(2)};
  line-height: ${rhythm(2)};
  ${props => props.theme.media.phone`
    ${scale(1.5)}
    line-height: ${rhythm(1.5)};
  `};
`
const StripeContainer = styled.div`
  background: ${props => props.backgroundColor};
  width: 100%;
`
const StripeBoxSvg = styled.div`
  height: ${rhythm(6)};
  width: 100%;
`

function TaglineSection({
  title,
  subtitle,
  align,
  colors,
  hasBottomStripe = false,
  crazyTextRange,
  theme,
}) {
  return (
    <TaglineContainer backgroundColor={colors.backgroundColor}>
      <div className='outerContainer'>
        <TaglineTitle align={align}>
          <CrazyText
            range={crazyTextRange}
            baseColor={theme.color.secondary.main}
          >
            {title}
          </CrazyText>
        </TaglineTitle>
        {subtitle && (
          <TaglineSubtitle align={align} textColor={colors.textColor}>
            {subtitle}
          </TaglineSubtitle>
        )}
      </div>
      {hasBottomStripe && <StripeBox colors={colors} />}
    </TaglineContainer>
  )
}

export default withTheme(TaglineSection)
