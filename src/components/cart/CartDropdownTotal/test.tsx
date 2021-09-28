import { render, screen } from '@testing-library/react'

import { CartDropdownTotal } from '.'

describe('<CartDropdownTotal />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartDropdownTotal />)

    expect(
      screen.getByRole('heading', { name: /CartDropdownTotal/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
