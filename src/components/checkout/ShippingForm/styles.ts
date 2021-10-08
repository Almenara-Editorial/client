import styled from 'styled-components'

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
`

export const ShippingItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 3.2rem;
  align-items: center;
  font-size: var(--font-sm);
  font-weight: var(--body-regular);

  span {
    display: block;
  }
`
