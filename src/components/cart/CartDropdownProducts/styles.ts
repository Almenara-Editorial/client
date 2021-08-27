import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 47.2rem;
  overflow-y: hidden;

  > span {
    display: block;
    margin-top: var(--space-lg);
    font-weight: var(--body-bold);
    font-size: var(--font-sm);
    text-align: center;
  }
`
