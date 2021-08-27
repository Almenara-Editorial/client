import { render, screen } from '@testing-library/react'

import { CartDropdownProduct } from '.'

describe('<CartDropdownProduct />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartDropdownProduct />)

    expect(screen.getByRole('heading', { name: /CartDropdownProduct/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
