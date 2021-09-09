import { Wrapper } from '@/components/shared'
import styled from 'styled-components'

export const Container = styled(Wrapper).attrs({ as: 'div' })``

export const Main = styled(Wrapper).attrs({ as: 'section' })`
  display: flex;
  gap: 3.2rem;
  padding: 4.8rem 0;
`
