import { Wrapper } from '@/components/shared/Wrapper'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  height: 80rem;
`

export const Content = styled(Wrapper)`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`

export const BooksImage = styled.div`
  position: absolute;
  flex-shrink: 0;
  right: 50%;
`

export const Text = styled.div`
  padding: 4.8rem;
  max-width: 67.3rem;
  margin-left: auto;
  color: var(--color-primary-700);

  h1 {
    line-height: 1.2;
    font-size: var(--font-4xl);
    font-family: var(--font-title);
    margin-bottom: 1rem;

    span {
      color: var(--color-tertiary-500);
    }
  }

  p {
    line-height: 1.8;
    font-size: var(--font-md);
    margin-bottom: 2rem;
  }
`
