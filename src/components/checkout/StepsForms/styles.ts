import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 4.8rem;

  ${media.lessThan('medium')`
    padding-inline: 2.4rem;
  `}
`
