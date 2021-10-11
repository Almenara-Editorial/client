import { Wrapper } from '@/components/shared'
import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled(Wrapper).attrs({ as: 'section' })`
  display: flex;
  gap: 3.2rem !important;
  min-height: calc(100vh - var(--header-height));

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const Content = styled.div`
  flex: 9;
  padding-block: 4.8rem;

  ${media.lessThan('medium')`
    padding-block: 0;
    padding-bottom: 4.8rem;
  `}
`
