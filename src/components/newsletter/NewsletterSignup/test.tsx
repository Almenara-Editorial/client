import { render, screen } from '@testing-library/react'

import { NewsletterSignup } from '.'

describe('<NewsletterSignup />', () => {
  it('should render the heading', () => {
    const { container } = render(<NewsletterSignup />)

    expect(screen.getByRole('heading', { name: /NewsletterSignup/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
