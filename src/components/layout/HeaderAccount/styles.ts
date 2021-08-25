import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  font-size: var(--font-sm);

  > i {
    font-size: 2.4rem;
  }

  > div > span {
    white-space: nowrap;
  }
`
