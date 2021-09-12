import { render, screen } from '@testing-library/react'

import { RecommendedProductCard } from '.'

describe('<RecommendedProductCard />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <RecommendedProductCard
        product={{ id: '', name: '', price: 1, slug: 'a', imageSrc: ' ' }}
      />
    )

    expect(
      screen.getByRole('heading', { name: /RecommendedProductCard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
