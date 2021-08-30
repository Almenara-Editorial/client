import styled from 'styled-components'
import { Popover as DefaultPopover } from '@/components/shared'

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
`

export const Popover = styled(DefaultPopover)`
  width: 39.5rem;
  padding: var(--space-lg);
`
