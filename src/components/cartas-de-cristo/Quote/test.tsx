import { render, screen } from '@testing-library/react'

import { Quote } from '.'

describe('<Quote />', () => {
  it('should render the heading', () => {
    const { container } = render(<Quote />)

    expect(screen.getByRole('heading', { name: /Quote/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
