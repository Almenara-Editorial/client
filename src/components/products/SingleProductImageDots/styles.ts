import styled from 'styled-components'
import { media } from '@/utils'

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: 0.8rem;
  list-style: none;
  justify-content: center;
  padding: 2rem;

  ${media.lessThan('medium')`
    padding: 1.2rem;
  `}
`
