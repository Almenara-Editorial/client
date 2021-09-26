import { render, screen } from '@testing-library/react'

import { CheckoutTotal } from '.'

describe('<CheckoutTotal />', () => {
  it('should render the heading', () => {
    const { container } = render(<CheckoutTotal />)

    expect(
      screen.getByRole('heading', { name: /CheckoutTotal/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
