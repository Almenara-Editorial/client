import { render, screen } from '@testing-library/react'

import { FooterLinksGroup } from '.'

describe('<FooterLinksGroup />', () => {
  it('should render the heading', () => {
    const { container } = render(<FooterLinksGroup />)

    expect(screen.getByRole('heading', { name: /FooterLinksGroup/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
