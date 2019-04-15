import React from 'react'
import styled from 'styled-components'
import { rhythm, scale } from '../typography'
import { withTheme } from 'styled-components'
import CrazyText from 'src/components/crazy-text'

const StripeContainer = styled.div`
  background: ${props => props.backgroundColor};
  width: 100%;
  box-shadow: 0px -4px ${props => props.backgroundColor};
`
const StripeBoxSvg = styled.div`
  height: ${rhythm(6)};
  width: 100%;
  //box-shadow: 0px -4px pink;
`

function StripeBox({ colors, children }) {
  return (
    <StripeContainer backgroundColor={colors.backgroundColor}>
      {children}
      <StripeBoxSvg>
        <svg
          style={{ height: '100%', width: '100%' }}
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <polygon
            points='0,0 100,100 0,100'
            style={{ fill: colors.bottomStripe }}
          />
        </svg>
      </StripeBoxSvg>
    </StripeContainer>
  )
}

export default withTheme(StripeBox)
