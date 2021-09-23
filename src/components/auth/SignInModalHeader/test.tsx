import { render, screen } from '@testing-library/react'

import { SignInModalHeader } from '.'

describe('<SignInModalHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<SignInModalHeader />)

    expect(
      screen.getByRole('heading', { name: /SignInModalHeader/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
