import { Container as Order } from '@/components/account/Order/styles'
import styled from 'styled-components'
import { Anchor } from '../Anchor'

export const Container = styled(Anchor).attrs({ as: 'button' })`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: var(--color-text);

  i {
    font-size: 2.4rem;
  }

  ${Order} & {
    font-size: 1.4rem;

    i {
      font-size: 2rem;
    }
  }
`
