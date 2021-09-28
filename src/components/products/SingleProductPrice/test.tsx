import { render, screen } from '@testing-library/react'

import { SingleProductPrice } from '.'

describe('<SingleProductPrice />', () => {
  it('should render the heading', () => {
    const { container } = render(<SingleProductPrice price={10} />)

    expect(
      screen.getByRole('heading', { name: /SingleProductPrice/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
