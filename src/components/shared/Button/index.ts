import styled from 'styled-components'

type ButtonVariant = 'primary' | 'neutral'
type ButtonColor = 'primary' | 'neutral' | 'background'
type ButtonSize = 'rg-narrow' | 'rg-medium' | 'rg-wide' | 'rg-full' | 'sm-narrow' | 'sm-medium' | 'sm-wide' | 'sm-full'

export type ButtonProps = {
  size?: ButtonSize
  uppercase?: boolean
  outline?: boolean
  color?: ButtonColor
  variant?: ButtonVariant
}

export const Button = styled.button.attrs<ButtonProps>(({ uppercase = true, outline, color = 'primary', size = 'rg-medium' }) => ({
  'data-size': size,
  'data-color': color,
  'data-is-uppercase': uppercase,
  'data-is-outline': outline
}))<ButtonProps>`
  display: inline-block;
  width: var(--button-width);
  height: var(--button-height);
  padding-inline: var(--button-padding-x);
  border: 0;
  border-radius: var(--radius-md);
  line-height: var(--button-height);

  background-color: var(--button-color);
  color: var(--color-white);

  font-size: var(--font-sm);
  font-weight: var(--body-bold);
  text-decoration: none;
  text-align: center;

  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    background-color: var(--button-color-hover);
  }

  &:focus {
    background-color: var(--button-color-focus);
    box-shadow: 0px 0px 0px 4px #ffffff, 0px 0px 0px 8px var(--button-color-focus-outline);
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
  }

  &[data-is-outline='true'][data-color='primary'] {
    --button-color-hover: var(--color-primary-500);
  }

  &[data-color='neutral'] {
    --button-color: var(--color-neutral-900);
    --button-color-hover: var(--color-neutral-800);
    --button-color-focus: var(--color-neutral-900);
    --button-color-focus-outline: var(--color-neutral-200);
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

  &:disabled {
    background-color: var(--color-neutral-200);
    color: var(--color-neutral-400);
    border: 0;
    pointer-events: none;
  }
`
