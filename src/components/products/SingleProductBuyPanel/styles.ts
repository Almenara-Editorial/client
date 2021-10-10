import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div``

export const Bottom = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: var(--space-xl);
`

export const QuantityBuy = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-lg);

  ${media.lessThan('medium')`
    width: 100%;
    flex-direction: column;
    align-items:flex-start;
  `}
`
