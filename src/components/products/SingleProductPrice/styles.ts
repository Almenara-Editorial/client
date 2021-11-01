import styled from 'styled-components'

export const Container = styled.div``

export const Price = styled.span`
  display: inline;

  font-family: var(--font-body);
  font-size: var(--font-lg);
  font-weight: var(--body-bold);

  &[data-old-price='true'] {
    position: relative;
    color: var(--color-neutral-300);
    font-weight: var(--body-regular);
    font-size: var(--font-md);
    margin-left: 1rem;

    :before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 1px;
      background-color: var(--color-neutral-300);
    }
  }
`

export const Installments = styled.span`
  display: inline-block;
  margin-left: var(--space-md);

  font-weight: var(--body-regular);
  font-size: var(--font-sm);

  color: var(--color-neutral-500);
`
export const Disccount = styled.div`
  margin-top: 1.2rem;
  font-size: var(--font-xs);
  border-radius: 0.4rem;
  max-width: 30rem;

  i {
    font-size: 1.2rem;
    line-height: 0;
    margin-right: 0.8rem;
    color: var(--color-success-300);
  }

  h3 {
    font-weight: var(--body-regular);
    font-size: var(--font-xs);
    margin-bottom: 1.2rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  table,
  tr,
  td {
    border: 1px solid var(--color-neutral-300);
  }

  td {
    padding: 0.4rem 0.8rem;
  }
`
