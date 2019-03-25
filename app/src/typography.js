import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['halyard-display', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['halyard-display', 'Helvetica', 'Arial', 'sans-serif'],
})

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
