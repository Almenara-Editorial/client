import { render, screen } from '@testing-library/react'

import { FilterSidebarTitle } from '.'

describe('<FilterSidebarTitle />', () => {
  it('should render the heading', () => {
    const { container } = render(<FilterSidebarTitle />)

    expect(screen.getByRole('heading', { name: /FilterSidebarTitle/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
