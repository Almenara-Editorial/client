import { render, screen } from '@testing-library/react'

import { NewsletterSignupHeader } from '.'

describe('<NewsletterSignupHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<NewsletterSignupHeader />)

    expect(screen.getByRole('heading', { name: /NewsletterSignupHeader/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
