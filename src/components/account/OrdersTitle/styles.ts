import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  text-align: center;
  font-weight: var(--body-bold);
  padding-block: 1.2rem;
  margin-bottom: 1.2rem;
  background-color: var(--color-neutral-50);
  color: var(--color-text);
  border-radius: 0.4rem 0.4rem 0 0;

  > div {
    flex: 1;
  }
`
