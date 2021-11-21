import styled from 'styled-components'
import { Popover as DefaultPopover } from '@/components/shared'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Button = styled.button`
  background: none;
  -webkit-appearance: none;
  border-radius: 0;
  border: 0;
  color: inherit;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  cursor: pointer;

  i {
    font-size: 0.8em;
    line-height: 0;
  }
`

export const Popover = styled(DefaultPopover)`
  padding: 1.2rem;
  min-width: fit-content;
  left: auto;
  right: auto;
`

export const Item = styled.a`
  display: block;
  text-decoration: none;
  padding: 0.4rem 1.2rem;
  color: inherit;
  transition: all 0.2s;

  &[data-active='true'] {
    background-color: var(--color-neutral-50);
  }
`
