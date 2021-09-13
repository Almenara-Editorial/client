import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  font-size: var(--font-sm);

  & + & {
    margin-top: 1.8rem;
  }

  > div:first-child {
    flex: 1 0 30rem;
  }

  > div:nth-child(2) {
    flex: 1 0 7rem;
  }

  > div:nth-child(3) {
    flex: 1 0 12rem;
  }
`
