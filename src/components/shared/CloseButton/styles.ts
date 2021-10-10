import { Container as Menu } from '@/components/layout/Menu/styles'
import styled from 'styled-components'

export const Container = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 2.4rem;
  height: 2.4rem;

  color: var(--color-neutral-500);
  background: none;

  cursor: pointer;
  font-size: var(--font-rg);

  &:hover {
    color: var(--color-neutral-300);
  }

  ${Menu} & {
    top: 3rem;
    right: 2.4rem;
    font-size: 3rem;
    width: 4rem;
    height: 4rem;
    color: var(--color-white);
  }
`
