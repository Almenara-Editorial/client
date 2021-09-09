import { render, screen } from '@testing-library/react'

import { FilterSidebar } from '.'

describe('<FilterSidebar />', () => {
  it('should render the heading', () => {
    const { container } = render(<FilterSidebar />)

    expect(screen.getByRole('heading', { name: /FilterSidebar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
