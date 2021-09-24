import { render, screen } from '@testing-library/react'

import { NewPasswordForm } from '.'

describe('<NewPasswordForm />', () => {
  it('should render the heading', () => {
    const { container } = render(<NewPasswordForm />)

    expect(
      screen.getByRole('heading', { name: /NewPasswordForm/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
