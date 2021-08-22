import styled from 'styled-components'

export const Container = styled.button`
  --button-background: var(--color-neutral-100);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  height: 4rem;
  padding: 1rem 1.2rem;
  border: 0;
  border-radius: var(--radius-md);

  background-color: var(--button-background);
  color: var(--color-text);

  font-weight: var(--body-bold);
  font-size: var(--font-sm);

  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    --button-background: var(--color-neutral-50);
  }

  svg {
    font-size: 1.8rem;
  }

  &[data-isincart='true'] {
    --button-background: var(--color-neutral-600);
    color: var(--color-white);

    &:hover {
      --button-background: var(--color-danger-300);
    }
  }
`
