import { render, screen } from '@testing-library/react'

import { SignInForm } from '.'

describe('<SignInForm />', () => {
  it('should render the heading', () => {
    const { container } = render(<SignInForm />)

    expect(
      screen.getByRole('heading', { name: /SignInForm/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
