import { Wrapper } from '@/components/shared'
import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled(Wrapper).attrs({ as: 'section' })``

export const Main = styled.div`
  display: flex;
  gap: var(--space-xl);
  padding-block: 4.8rem;

  ${media.lessThan('medium')`
    flex-direction: column;
    padding-block: 2.4rem;
  `}
`

export const Infos = styled.div`
  padding-block: 4.8rem;
`
