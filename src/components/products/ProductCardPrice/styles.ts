import styled from 'styled-components'

export const Container = styled.span`
  font-size: var(--font-sm);
  font-family: var(--font-body);
  color: var(--color-text);

  &[data-muted='true'] {
    color: var(--color-neutral-300);
  }
`
