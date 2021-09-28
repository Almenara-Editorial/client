import { render, screen } from '@testing-library/react'

import { FavoritesLink } from '.'

describe('<FavoritesLink />', () => {
  it('should render the heading', () => {
    const { container } = render(<FavoritesLink />)

    expect(
      screen.getByRole('heading', { name: /FavoritesLink/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
