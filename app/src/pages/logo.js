// @flow

import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import Logo from 'src/components/logo'

const Container = styled.section`
  width: 500px;
  border: solid 1px green;
  margin: 10px auto auto;
  padding: 50px;
  background: black;
`

const LogoPage = () => (
  <Container>
    <Logo />
    <Logo withText />
  </Container>
)

export default LogoPage
