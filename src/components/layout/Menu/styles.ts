import styled from 'styled-components'
import { Wrapper as DefaultWrapper } from '@/components/shared/Wrapper'

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  transform: translateY(100%);
  opacity: 0.5;
  background-color: var(--color-primary-500);
  z-index: var(--layer-modal);
  transition: all 0.2s ease;

  &[data-is-open='true'] {
    transform: translateY(0);
    opacity: 1;

    ul {
      transition: all 0.6s ease;
      transform: translateX(0);
    }
  }
`

export const Wrapper = styled(DefaultWrapper)`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-block: 2rem;

  i {
    line-height: 0;
    font-size: 16rem;
    color: var(--color-white);
  }

  ul {
    transition: all 0.2s ease;
    transform: translateX(-100%);
    list-style: none;
  }
`
export const Anchor = styled.a`
  display: block;
  padding: 1.2rem 0;
  font-size: var(--font-md);
  color: var(--color-white);
`
