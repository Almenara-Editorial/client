import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.9rem;
  padding-bottom: 1.2rem;
  font-size: var(--font-sm);
  list-style: none;

  ${media.lessThan('medium')`
    display:none;
  `}
`

export const ListItem = styled.li`
  padding: 1.2rem 2.8rem;

  & + & {
    border-left: 1px solid var(--color-neutral-100);
  }
`

export const LinkAnchor = styled.a``
