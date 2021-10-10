import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  ${media.lessThan('medium')`
    flex-wrap: wrap;  
  `}
`
