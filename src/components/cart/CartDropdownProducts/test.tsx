import { render, screen } from '@testing-library/react'

import { CartDropdownProducts } from '.'

describe('<CartDropdownProducts />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartDropdownProducts />)

    expect(screen.getByRole('heading', { name: /CartDropdownProducts/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
