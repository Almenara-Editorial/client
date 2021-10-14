import styled from 'styled-components'
import { Container as Menu } from '../Menu/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  li {
    color: var(--color-white);
    display: block;
  }

  li + li {
    margin-top: 1rem;
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  font-size: var(--font-sm);

  > i {
    font-size: 2.8rem;
  }

  > div > span {
    white-space: nowrap;
  }

  ${Menu} & {
    color: var(--color-white);
  }
`
