import { QuantityBuy } from '@/components/products/SingleProductBuyPanel/styles'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);

  input,
  & {
    font: inherit;
    font-size: 1.6rem;
    text-align: center;
    font-weight: var(--body-bold);
  }

  input {
    width: 100%;
    height: 3.2rem;
    border: 0;
    border-bottom: 1px solid transparent;
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }

  input:focus {
    outline: none;
    border-color: var(--input-label-color);
  }

  button {
    padding: 1rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--input-border-color);

    background-color: var(--color-background);

    line-height: 0;
    font-size: 1rem;

    cursor: pointer;

    &:hover:not(:disabled) {
      background-color: var(--color-neutral-50);
    }

    &:active:not(:disabled) {
      background-color: var(--color-neutral-100);
    }

    &:disabled {
      cursor: not-allowed;
      border: 0;
      color: var(--color-neutral-300);
    }
  }

  ${QuantityBuy} & {
    width: 15.5rem;
  }
`
