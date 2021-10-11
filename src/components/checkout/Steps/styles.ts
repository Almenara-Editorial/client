import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  grid-area: form;
  padding-block: 4.8rem;

  ${media.lessThan('medium')`
    padding-block: 2.4rem;
  `}
`
