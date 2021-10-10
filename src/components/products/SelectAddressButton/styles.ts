import styled from 'styled-components'

export const Container = styled.div`
  i {
    font-size: 1.6rem;
  }
`
export const ShippingList = styled.ul`
  list-style: circle;
  list-style-position: inside;
  color: var(--color-neutral-700);

  > h3 {
    font-size: var(--font-sm);
    margin-bottom: 0.8rem;
  }

  li {
    width: 100%;
  }
`

export const ShippingOption = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;

  font-size: var(--font-sm);
`
