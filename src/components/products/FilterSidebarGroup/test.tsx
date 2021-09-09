import { render, screen } from '@testing-library/react'

import { FilterSidebarGroup } from '.'

describe('<FilterSidebarGroup />', () => {
  it('should render the heading', () => {
    const { container } = render(<FilterSidebarGroup />)

    expect(
      screen.getByRole('heading', { name: /FilterSidebarGroup/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
