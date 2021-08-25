import { render, screen } from '@testing-library/react'

import { SingleProductBuyPanel } from '.'

describe('<SingleProductBuyPanel />', () => {
  it('should render the heading', () => {
    const { container } = render(<SingleProductBuyPanel />)

    expect(screen.getByRole('heading', { name: /SingleProductBuyPanel/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
