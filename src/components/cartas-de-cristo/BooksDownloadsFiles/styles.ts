import styled from 'styled-components'

export const Container = styled.div`
  padding: 4.8rem;

  p {
    font-size: var(--font-sm);
    margin-bottom: 1.2rem;
  }
`

export const Item = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  text-decoration: none !important;
  color: var(--color-primary-500);

  i {
    font-size: 2rem;
    line-height: 0;
  }
`
