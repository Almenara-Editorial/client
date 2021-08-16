import { media, DefaultBreakpoints } from '@/utils'
import styled, { css } from 'styled-components'

type MediaMatchProps = {
  lessThan?: DefaultBreakpoints
  greaterThan?: DefaultBreakpoints
}

const mediaMatchModifiers = {
  lessThan: (size: DefaultBreakpoints) => css`
    ${media.lessThan(size)` display: block `}
  `,
  greaterThan: (size: DefaultBreakpoints) => css`
    ${media.greaterThan(size)` display: block `}
  `
}

export const MediaMatch = styled.div<MediaMatchProps>(
  ({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `
)
