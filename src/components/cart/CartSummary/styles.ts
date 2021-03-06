import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  top: calc(var(--header-height) + var(--space-xl));
  flex: 1 0 38.4rem;
  max-width: 38.4rem;
  padding: var(--space-xl);
  border: 1px solid var(--color-neutral-100);
  border-radius: 0.4rem;

  ${media.lessThan('medium')`
    padding: var(--space-lg);
  `}
`
export const Title = styled.h2`
  font-family: var(--font-title);
  text-align: center;
  margin-bottom: var(--space-xl);
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--space-xl);
  font-size: var(--font-sm);

  & + & {
    margin-top: var(--space-lg);
  }

  .withDisccount {
    color: var(--color-success-300);
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--space-xl);
  font-size: var(--font-md);
  font-weight: var(--body-bold);
  margin-bottom: var(--space-xl);
`
export const PaymentButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`
