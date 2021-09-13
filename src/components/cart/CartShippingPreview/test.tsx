import { render, screen } from '@testing-library/react'

import { CartShippingPreview } from '.'

describe('<CartShippingPreview />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartShippingPreview />)

    expect(
      screen.getByRole('heading', { name: /CartShippingPreview/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
