import { Wrapper as DefaultWrapper } from '@/components/shared'
import { media } from '@/utils'

import styled from 'styled-components'

export const Container = styled.div`
  border-top: 1px solid var(--color-neutral-100);
`

export const Wrapper = styled(DefaultWrapper)`
  padding-block: 18rem;

  ${media.lessThan('medium')`
    padding-block: 10rem;
  `}
`
