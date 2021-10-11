import styled from 'styled-components'
import { FieldGroup } from '../FieldGroup'
import { Label } from '../Label'

export const Input = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: var(--input-height);
  max-height: var(--input-height);
  padding-inline: var(--input-padding-x);
  box-shadow: 0 0 0 1px var(--input-border-color);
  border-radius: var(--input-border-radius);
  border: 0;

  font-size: 1.6rem;
  color: var(--color-text);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--input-focus-border-color);
  }

  &[type='search'],
  &[data-hidden-placeholder='false'] {
    ::placeholder {
      font: inherit;
      opacity: 1;
      color: var(--input-label-color);
    }
  }

  &:not([type='search'])[data-hidden-placeholder='true'] {
    ::placeholder {
      color: transparent;
    }

    ~ ${Label} {
      position: absolute;
      top: 50%;
      left: var(--input-padding-x);
      z-index: var(--layer-base);
      transform: translateY(-50%);
      margin-bottom: 0;
      color: var(--input-label-color);
      font-size: 1.6rem;
      transition: all 0.2s;
      will-change: font-size, transform, top;
      pointer-events: none;
    }
  }

  ~ button {
    transform: translateY(-50%);
    border: 0;
    opacity: 1;

    position: absolute;
    top: 50%;
    right: var(--input-padding-x);
    z-index: var(--layer-base);

    background: none;
    color: var(--input-label-color);

    font-size: 2.4rem;
    line-height: 0;

    cursor: pointer;
    transition: opacity 0.2s;
  }

  &:not([type='text']) {
    padding-right: calc(2 * var(--input-padding-x) + 2.4rem);
  }

  &[type='password']:placeholder-shown ~ button {
    opacity: 0;
  }

  &:focus,
  &:not(:placeholder-shown) {
    ~ ${Label} {
      padding-inline: 1rem;
      top: 0 !important;
      transform: translate(-1rem, -50%) !important;
      color: var(--input-label-color);
      background-color: var(--color-background);
      font-size: var(--font-sm) !important;
    }
  }

  &:disabled,
  &[data-loading='true'] {
    background-color: var(--input-disabled-background);
    cursor: not-allowed;

    ~ button {
      display: none;
    }
  }

  &[data-loading='true'] {
    pointer-events: none;
    background: var;
  }

  ${FieldGroup} & {
    flex: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`

export const FieldContainer = styled.div`
  width: 100%;
  position: relative;
  height: fit-content;
`

export const Container = styled.div``
