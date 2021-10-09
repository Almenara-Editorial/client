import styled from 'styled-components'
import { media } from '@/utils'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-md);

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const ErrorMessage = styled.div`
  color: var(--color-white);
  font-size: var(--font-sm);
  padding-block: 1.2rem;
  text-align: center;
`

export const SuccessIcon = styled.div`
  font-size: 6.4rem;
  color: var(--color-white);
`
