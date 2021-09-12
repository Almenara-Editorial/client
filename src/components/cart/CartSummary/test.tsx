import { render, screen } from '@testing-library/react'

import { CartSummary } from '.'

describe('<CartSummary />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartSummary />)

    expect(
      screen.getByRole('heading', { name: /CartSummary/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
