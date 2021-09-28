import styled from 'styled-components'
import { media } from '@/utils'

type HeroSliderPagingProps = {
  active?: boolean
}

export const HeroSliderPaging = styled.span.attrs<HeroSliderPagingProps>(
  ({ active }) => ({
    'data-active': active
  })
)`
  display: block;
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 100px;
  transition: all 0.2s;

  background-color: var(--color-white);
  opacity: 0.3;

  cursor: pointer;

  .slick-active & {
    width: 2.4rem;
    opacity: 1;
  }

  ${media.lessThan('medium')`
  `}
`
