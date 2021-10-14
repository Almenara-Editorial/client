import styled from 'styled-components'
import { Wrapper as DefaultWrapper } from '@/components/shared'
import { media } from '@/utils'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: var(--layer-header);

  width: 100%;
  box-shadow: 0 0 0 1px var(--color-neutral-100);
  min-height: var(--header-height);

  background-color: var(--color-background);
`

export const Wrapper = styled(DefaultWrapper)`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-xl);

  > form {
    width: 42.4rem;
  }

  .logo {
    flex: 5;
    display: flex;
    align-items: center;
    font-size: 16rem;
    height: fit-content;
    line-height: 0;
  }

  .right {
    flex: 7;
    display: flex;
    gap: var(--space-xl);

    ${media.lessThan('medium')`
      display: none;
    `}
  }

  .search {
    flex: 1 1;
  }

  .mobile-buttons {
    display: flex;
    gap: var(--space-lg);
  }

  ${media.lessThan('medium')`
    .logo {
      flex: 1;
    }
  `}
`
