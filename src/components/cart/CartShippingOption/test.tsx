import { render, screen } from '@testing-library/react'

import { CartShippingOption } from '.'

describe('<CartShippingOption />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartShippingOption />)

    expect(screen.getByRole('heading', { name: /CartShippingOption/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
