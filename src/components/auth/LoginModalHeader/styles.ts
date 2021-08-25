import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;

  > h2 {
    font-family: var(--font-title);
    font-size: var(--font-xl);
    margin-bottom: var(--space-lg);
  }

  > p {
    font-size: var(--font-sm);

    color: var(--color-neutral-700);
  }
`
