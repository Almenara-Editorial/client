import styled from 'styled-components'
import { Popover as DefaultPopover } from '@/components/shared'

export const Container = styled.div`
  position: relative;
`

export const Button = styled.button`
  position: relative;
  width: 100%;
  height: var(--input-height);
  border: 0;
  border-radius: var(--input-border-radius);
  padding-inline: var(--input-padding-x);
  box-shadow: 0 0 0 1px var(--input-border-color);
  overflow: hidden;

  background: var(--color-background);
  text-align: left;
  font-size: 1.6rem;

  cursor: pointer;

  &:hover i {
    transform: translateY(2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--input-focus-border-color);
  }

  &[data-disabled='true'],
  &[data-disabled='true'] i {
    background: var(--color-neutral-50);
    pointer-events: none;
  }

  i {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: var(--input-padding-x);
    height: 100%;
    right: 0;
    top: 0;

    color: var(--color-neutral-300);
    background-color: var(--color-background);

    font-size: 1.8rem;
    line-height: 0;
    text-align: center;
    transition: transform 0.2s;
  }
`

export const Popover = styled(DefaultPopover)`
  padding-block: var(--space-sm);
  list-style: none;
  z-index: var(--layer-popover);

  &:focus,
  &:focus-within {
    outline: none;
  }
`

export const Option = styled.li`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: 1.2rem var(--input-padding-x);

  font-size: 1.6rem;

  color: var(--color-neutral-700);

  cursor: pointer;

  &[data-active='true'] {
    background-color: var(--color-primary-100);
  }

  &[data-selected='true'] {
    font-weight: var(--body-bold);
    color: var(--color-text);
  }

  svg {
    font-size: 1.6rem;
  }
`
