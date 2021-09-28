import { render, screen } from '@testing-library/react'

import { ButtonLink } from '.'

describe('<ButtonLink />', () => {
  it('should render the heading', () => {
    const { container } = render(<ButtonLink href="#">Button link</ButtonLink>)

    expect(
      screen.getByRole('heading', { name: /ButtonLink/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
