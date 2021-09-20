import { render, screen } from '@testing-library/react'

import { SigninButton } from '.'

describe('<SigninButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<SigninButton />)

    expect(
      screen.getByRole('heading', { name: /SigninButton/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
