import { render, screen } from '@testing-library/react'

import { ProductCardGroupTitle } from '.'

describe('<ProductCardGroupTitle />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProductCardGroupTitle />)

    expect(
      screen.getByRole('heading', { name: /ProductCardGroupTitle/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
