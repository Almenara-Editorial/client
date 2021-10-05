import { render, screen } from '@testing-library/react'

import { SingleProductImageDots } from '.'

describe('<SingleProductImageDots />', () => {
  it('should render the heading', () => {
    const { container } = render(<SingleProductImageDots dots={<div />} />)

    expect(
      screen.getByRole('heading', { name: /SingleProductImageDots/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
