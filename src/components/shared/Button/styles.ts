import { FieldGroup } from '@/components/form/FieldGroup'
import styled from 'styled-components'
import { ButtonProps } from '.'

export const Container = styled.button.attrs<ButtonProps>(
  ({ uppercase = true, outline, color = 'primary', size = 'rg-full', isLoading }) => ({
    'data-size': size,
    'data-color': color,
    'data-is-uppercase': uppercase,
    'data-is-outline': outline,
    'data-is-loading': isLoading
  })
)<ButtonProps>`
  display: inline-block;
  width: var(--button-width);
  height: var(--button-height);
  padding-inline: var(--button-padding-x);
  border: 0;
  box-shadow: 0 0 0 1px var(--button-color);
  border-radius: var(--radius-md);
  line-height: var(--button-height);

  background-color: var(--button-color);
  color: var(--color-white);

  font-size: var(--font-sm);
  font-weight: var(--body-bold);
  line-height: 0;
  text-decoration: none;
  text-align: center;

  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    background-color: var(--button-color-hover);
  }

  &:focus,
  &:active {
    box-shadow: 0px 0px 0px 4px #ffffff, 0px 0px 0px 8px var(--button-color-focus-outline);
  }
  &:focus {
    background-color: var(--button-color-focus);
  }

  &:focus-visible {
    background-color: var(--button-color-hover);
    outline: none;
    box-shadow: none;
  }

  &:active {
    background-color: var(--button-color-active);
    outline: none;
    box-shadow: none;
  }

  &[data-is-outline='true'] {
    background: transparent;
    color: var(--button-color);
    border: 2px solid var(--button-color);

    &:hover {
      background-color: var(--button-color-hover);
      color: var(--color-white);
    }

    &:focus {
      background-color: var(--button-color-focus);
      color: var(--color-white);
    }
  }

  &[data-color='primary'] {
    --button-color: var(--color-primary-500);
    --button-color-hover: var(--color-primary-400);
    --button-color-focus: var(--color-primary-500);
    --button-color-focus-outline: var(--color-primary-200);
    --button-color-active: var(--color-primary-500);
  }

  &[data-is-outline='true'][data-color='primary'] {
    --button-color-hover: var(--color-primary-500);
  }

  &[data-color='neutral'] {
    --button-color: var(--color-neutral-900);
    --button-color-hover: var(--color-neutral-800);
    --button-color-focus: var(--color-neutral-900);
    --button-color-focus-outline: var(--color-neutral-200);
    --button-color-active: var(--color-neutral-900);
    --button-color-loading: var(--color-neutral-900); //
    --button-text-color: var(--color-neutral-900);
    --button-text-color-loading: var(--color-white);
  }

  &[data-is-outline='true'][data-color='neutral'] {
    --button-color-hover: var(--color-neutral-900);
  }

  &[data-size^='rg'] {
    --button-height: 5.1rem;
    --button-padding-x: 3.2rem;
  }

  &[data-size^='sm'] {
    --button-height: 4rem;
    --button-padding-x: 2.4rem;
  }

  &[data-size$='narrow'] {
    --button-width: 20rem;
  }

  &[data-size$='medium'] {
    --button-width: 28rem;
  }

  &[data-size$='wide'] {
    --button-width: 32rem;
  }

  &[data-size$='full'] {
    --button-width: 100%;
  }

  &[data-is-uppercase='true'] {
    text-transform: uppercase;
  }

  &[data-is-loading='true'] {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    pointer-events: none;

    background-color: var(--button-color-loading, --button-color);
    color: var(--button-text-color-loading, --button-text-color);

    i {
      font-size: 1.8rem;
    }
  }

  &:disabled {
    background-color: var(--color-neutral-200);
    color: var(--color-neutral-400);
    border: 0;
    box-shadow: 0 0 0 2px var(--color-neutral-200);
    pointer-events: none;
  }

  ${FieldGroup} & {
    z-index: var(--layer-base);
    --button-width: fit-content;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`
