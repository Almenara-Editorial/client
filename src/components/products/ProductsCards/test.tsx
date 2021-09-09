import { render, screen } from '@testing-library/react'

import { ProductsCards } from '.'

describe('<ProductsCards />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProductsCards />)

    expect(screen.getByRole('heading', { name: /ProductsCards/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
