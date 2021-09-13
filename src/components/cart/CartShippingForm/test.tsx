import { render, screen } from '@testing-library/react'

import { CartShippingForm } from '.'

describe('<CartShippingForm />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartShippingForm />)

    expect(screen.getByRole('heading', { name: /CartShippingForm/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
