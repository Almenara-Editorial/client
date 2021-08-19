import { render, screen } from '@testing-library/react'

import { ProductCard } from '.'

describe('<ProductCard />', () => {
  it('should render the heading', () => {
    render(<ProductCard />)

    expect(screen.getByRole('heading', { name: /ProductCard/i })).toBeInTheDocument()
  })
})
