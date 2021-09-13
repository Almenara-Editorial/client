import { render, screen } from '@testing-library/react'

import { CartShippingOptions } from '.'

describe('<CartShippingOptions />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartShippingOptions />)

    expect(
      screen.getByRole('heading', { name: /CartShippingOptions/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
