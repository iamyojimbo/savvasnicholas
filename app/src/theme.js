import { css } from 'styled-components'

const breakpoints = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default {
  color: {
    primary: {
      dark: '#43434d',
      main: '#596271',
      light: '#7f8994',
      lightest: '#9aa9b4',
    },
    secondary: {
      main: '#dfbb4f',
      dark: '#b29146',
    },
    contrast: {
      main: '#f4f3f3',
    },
  },
  typography: {
    title: {
      family: 'haylard-display, sans-serif',
    },
    body: {
      family: 'haylard-display, sans-serif;',
    },
  },
  breakpoints,
  media,
}
