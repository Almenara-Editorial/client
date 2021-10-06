import styled from 'styled-components'
import { Wrapper as DefaultWrapper } from '@/components/shared'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100%;
  position: fixed;
  top: 0;
  left: 0;
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

  > div:first-child {
    flex: 5 0 54.3rem;

    > a {
      display: block;
      width: fit-content;
    }
  }

  > form {
    width: 42.4rem;
  }
`
