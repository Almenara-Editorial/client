import { render, screen } from '@testing-library/react'

import { RecommendedProducts } from '.'

describe('<RecommendedProducts />', () => {
  it('should render the heading', () => {
    const { container } = render(<RecommendedProducts />)

    expect(screen.getByRole('heading', { name: /RecommendedProducts/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
