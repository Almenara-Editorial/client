import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.9rem;
  padding-bottom: 1.2rem;

  ${media.lessThan('medium')`
    display:none;
  `}
`

export const LinkAnchor = styled.a`
  padding: 1.2rem 2.8rem;

  & + & {
    border-left: 1px solid var(--color-neutral-100);
  }
`
