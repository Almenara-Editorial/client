import { render, screen } from '@testing-library/react'

import { NewsletterSignupForm } from '.'

describe('<NewsletterSignupForm />', () => {
  it('should render the heading', () => {
    const { container } = render(<NewsletterSignupForm />)

    expect(screen.getByRole('heading', { name: /NewsletterSignupForm/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
