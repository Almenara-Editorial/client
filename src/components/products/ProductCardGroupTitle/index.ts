import styled from 'styled-components'

type ProductCardGroupTitleProps = {
  size?: 'sm' | 'lg'
  align?: 'left' | 'center'
}

export const ProductCardGroupTitle = styled.div.attrs<ProductCardGroupTitleProps>(
  ({ size, align = 'center' }) => ({
    'data-size': size,
    'data-align': align
  })
)<ProductCardGroupTitleProps>`
  display: flex;
  align-items: center;
  min-width: 100%;
  margin-bottom: var(--space-xl);

  font-family: var(--font-title);
  font-size: var(--font-xl);
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

  &[data-align='left'] {
    &:before {
      content: none;
      background-color: red;
    }
  }

  &[data-size='sm'] {
    font-size: 1.8rem;
  }
`
