import styled from 'styled-components'
import { media } from '@/utils'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-primary-500);
  padding: var(--space-xl) var(--space-lg);
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 91.6rem;
  gap: var(--space-lg);
`
