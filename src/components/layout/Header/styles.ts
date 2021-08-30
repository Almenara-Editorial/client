import styled from 'styled-components'
import { Wrapper as DefaultWrapper } from '@/components/shared'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--layer-header);

  width: 100%;
  box-shadow: 0 0 0 1px var(--color-neutral-100);

  background-color: var(--color-background);
`

export const Wrapper = styled(DefaultWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-md);
  min-height: 8.7rem;

  > div:first-child {
    flex: 5 0 54.3rem;
  }
`
