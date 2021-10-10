import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 69.5rem minmax(54.8rem, 1fr);
  grid-template-areas: '. form .';

  ${media.lessThan('medium')`
    display:block;
  `}
`
