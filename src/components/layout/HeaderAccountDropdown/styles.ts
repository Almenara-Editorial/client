import styled from 'styled-components'

import { Link as DefaultLink } from '@/components/shared'

export const Container = styled.div`
  position: relative;
  font-size: var(--font-sm);
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  background: none;
  border: 0;

  font-weight: var(--body-bold);

  cursor: pointer;

  > i {
    font-size: 1.2rem;
    line-height: 0;
  }
`

export const List = styled.ul`
  min-width: 32rem;
  list-style: none;
  font-size: var(--body-sm);
  padding: 1.2rem;
`

export const Link = styled(DefaultLink).attrs({ as: 'a' })`
  display: block;
  text-decoration: none;
  padding: 1.2rem;
  color: var(--color-text);
  border-radius: var(--radius-sm);

  &:hover {
    background-color: var(--color-neutral-50);
  }

  span {
    display: block;
    margin-top: 0.8rem;
    color: var(--color-neutral-300);
  }
`
