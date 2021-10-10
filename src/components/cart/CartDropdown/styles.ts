import styled from 'styled-components'
import { Popover as DefaultPopover } from '@/components/shared'
import { media } from '@/utils'

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
`

export const Popover = styled(DefaultPopover)`
  width: 39.5rem;
  padding: var(--space-lg);
  max-height: 80vh;

  ${media.lessThan('medium')`
    position:fixed;
    width: 100vw;
    top: var(--header-height);
    right: 0;
  `}
`
