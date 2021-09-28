import { render, screen } from '@testing-library/react'

import { SingleProductTitle } from '.'

describe('<SingleProductTitle />', () => {
  it('should render the heading', () => {
    const { container } = render(<SingleProductTitle />)

    expect(
      screen.getByRole('heading', { name: /SingleProductTitle/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
