import styled from 'styled-components'

export const Input = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-height: 5rem;
  padding: var(--input-padding-x);
  box-shadow: 0 0 0 1px var(--input-border-color);
  border: 0;
  border-radius: var(--input-border-radius);
  font: inherit;

  font-size: 1.6rem;
  color: var(--color-text);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--input-focus-border-color);
  }

  &:disabled {
    background-color: var(--input-disabled-background);
    cursor: not-allowed;
  }
`
export const Container = styled.div``
