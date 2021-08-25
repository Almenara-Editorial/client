import { render, screen } from '@testing-library/react'

import { ShippingAddressModal } from '.'

describe('<ShippingAddressModal />', () => {
  it('should render the heading', () => {
    const { container } = render(<ShippingAddressModal />)

    expect(screen.getByRole('heading', { name: /ShippingAddressModal/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
