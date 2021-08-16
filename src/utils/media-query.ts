import { generateMedia } from 'styled-media-query'

export type DefaultBreakpoints = 'huge' | 'large' | 'medium' | 'small'

export const media = generateMedia({
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px'
})
