import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  justify-content: center;
  padding-block: 1.2rem;
  font-size: var(--font-sm);
  font-weight: var(--body-bold);
  background: none;
  border: 0;
  color: var(--color-neutral-500);

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 100%;
    background: var(--color-neutral-50);
    line-height: 0;
  }

  &[data-active='true'] {
    background: var(--color-neutral-50);
    color: var(--color-text);

    span {
      background: var(--color-white);
    }
  }
`
