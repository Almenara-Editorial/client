import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;

  ul {
    list-style: none;
  }

  li + li {
    margin-top: var(--space-md);
  }
`

export const Title = styled.h3`
  font-size: var(--font-md);
  margin-bottom: var(--space-md);
`

export const Anchor = styled.a`
  color: var(--color-text);

  &:hover {
    color: var(--color-neutral-800);
  }
`
