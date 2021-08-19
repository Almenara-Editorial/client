import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.6rem;
  font-weight: var(--body-bold);

  button {
    padding: 1rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--input-border-color);

    background-color: var(--color-background);

    line-height: 0;
    font-size: 1rem;

    cursor: pointer;

    &:hover {
      background-color: var(--color-neutral-50);
    }

    &:active {
      background-color: var(--color-neutral-100);
    }
  }
`
