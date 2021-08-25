import styled from 'styled-components'
import { Wrapper as DefaultWrapper } from '@/components/shared'

export const Container = styled.div`
  background-color: var(--color-background);
`

export const Wrapper = styled(DefaultWrapper)`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  min-height: 8.7rem;

  > div {
    flex: 5;
  }
`
