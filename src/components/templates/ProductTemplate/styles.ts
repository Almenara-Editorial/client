import { Wrapper } from '@/components/shared'
import styled from 'styled-components'

export const Container = styled(Wrapper).attrs({ as: 'section' })``

export const Main = styled.div`
  display: flex;
  gap: var(--space-xl);
  padding-block: 4.8rem;
`
