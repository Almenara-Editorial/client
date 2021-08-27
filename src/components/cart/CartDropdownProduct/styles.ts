import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: var(--space-sm);

  & + & {
    margin-top: var(--space-lg);
  }
`

export const Thumbnail = styled.div`
  padding: 1.6rem;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`

export const ProductName = styled.h3`
  font-family: var(--font-title);
  font-size: var(--font-sm);
`

export const ProductPrice = styled.span`
  font-size: var(--font-sm);
`
