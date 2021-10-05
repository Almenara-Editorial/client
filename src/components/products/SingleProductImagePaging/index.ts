import styled from 'styled-components'
import { media } from '@/utils'

type SingleProductImagePagingProps = {
  active?: boolean
}

export const SingleProductImagePaging = styled.span.attrs<SingleProductImagePagingProps>(
  ({ active }) => ({
    'data-active': active
  })
)`
  display: block;
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 100px;
  transition: all 0.2s;

  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.3;

  cursor: pointer;

  .slick-active & {
    width: 2.4rem;
    opacity: 1;
  }

  ${media.lessThan('medium')`
  `}
`
