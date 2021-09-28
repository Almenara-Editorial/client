import { render, screen } from '@testing-library/react'

import { ButtonWishlist } from '.'

describe('<ButtonWishlist />', () => {
  it('should render the heading', () => {
    const { container } = render(<ButtonWishlist isInWishlist={false} />)

    expect(
      screen.getByRole('heading', { name: /ButtonWishlist/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
