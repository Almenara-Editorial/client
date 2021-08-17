import { render, screen } from '@testing-library/react'

import { Link } from '.'

describe('<Link />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Link href="#" color="neutral">
        Link
      </Link>
    )

    expect(screen.getByRole('heading', { name: /Link/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
