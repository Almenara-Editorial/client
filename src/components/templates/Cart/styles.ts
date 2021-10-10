import styled from 'styled-components'
import { Wrapper } from '@/components/shared'
import { media } from '@/utils'

export const Container = styled(Wrapper)``

export const Main = styled.div`
  display: flex;
  padding-block: var(--space-xl);
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-xl);

  ${media.lessThan('medium')`
    flex-direction: column;


  > div {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
  }
  `}
`
