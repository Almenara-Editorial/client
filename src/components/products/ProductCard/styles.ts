import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  max-width: 21.2rem;
`

export const OffPercentage = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  z-index: var(--layer-base);

  height: 2rem;
  padding-inline: 1.6rem;
  border-radius: 5rem;

  font-size: var(--font-sm);
  font-weight: var(--body-bold);
  color: var(--color-white);
  background-color: var(--color-success-300);
`
