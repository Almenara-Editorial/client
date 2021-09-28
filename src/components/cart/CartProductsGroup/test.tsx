import { render, screen } from '@testing-library/react'

import { CartProductsGroup } from '.'

describe('<CartProductsGroup />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartProductsGroup />)

    expect(
      screen.getByRole('heading', { name: /CartProductsGroup/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
