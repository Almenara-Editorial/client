import { render, screen } from '@testing-library/react'

import { SectionTitle } from '.'

describe('<SectionTitle />', () => {
  it('should render the heading', () => {
    const { container } = render(<SectionTitle />)

    expect(screen.getByRole('heading', { name: /SectionTitle/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
