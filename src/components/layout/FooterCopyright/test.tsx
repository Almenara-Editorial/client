import { render, screen } from '@testing-library/react'

import { FooterCopyright } from '.'

describe('<FooterCopyright />', () => {
  it('should render the heading', () => {
    const { container } = render(<FooterCopyright />)

    expect(screen.getByRole('heading', { name: /FooterCopyright/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
