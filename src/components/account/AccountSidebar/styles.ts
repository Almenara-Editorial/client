import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  flex: 3;
  padding-block: 4.8rem;

  ${media.lessThan('medium')`
    padding-block: 0;
  `}
`

export const Links = styled.div`
  padding-block: 1.8rem;
`
export const MenuItem = styled.a`
  display: block;
  padding: 1.2rem 2.4rem;
  width: 100%;
  color: var(--color-primary-500);
  font-size: var(--font-sm);

  &.active {
    font-weight: var(--body-bold);
    color: var(--color-text);
    border-right: 2px solid var(--color-neutral-50);
  }

  &:hover {
    background-color: var(--color-neutral-50);
  }

  ${media.lessThan('medium')`
    padding: 1.2rem 0;
  `}
`
