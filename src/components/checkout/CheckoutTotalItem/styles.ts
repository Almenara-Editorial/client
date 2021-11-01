import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.2rem;
  font-size: var(--font-sm);

  & + & {
    margin-top: 2.4rem;
  }

  &[data-is-disccount='true'] {
    color: var(--color-success-300);
    font-weight: var(--body-bold);
  }
`
