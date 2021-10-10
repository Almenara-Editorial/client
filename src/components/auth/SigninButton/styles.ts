import { Container as Menu } from '@/components/layout/Menu/styles'
import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  text-align: left;
  border: 0;
  font-size: var(--font-sm);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${Menu} & {
    color: var(--color-white);
  }
`
