import styled from 'styled-components'

export const ProductCardGroupTitle = styled.div`
  display: flex;
  align-items: center;
  min-width: 100%;
  margin-bottom: var(--space-xl);

  font-family: var(--font-title);
  font-size: 3.2rem;
  font-weight: var(--title-regular);
  text-align: center;
  white-space: nowrap;

  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--color-neutral-200);
  }

  &:before {
    margin-right: var(--space-xl);
  }

  &:after {
    margin-left: var(--space-xl);
  }
`
