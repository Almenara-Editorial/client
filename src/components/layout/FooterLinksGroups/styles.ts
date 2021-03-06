import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 4.8rem;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`
