import { Wrapper } from '@/components/shared'
import styled from 'styled-components'

export const Container = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-block: 4.8rem;
`

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-bottom: 2.4rem;
`
