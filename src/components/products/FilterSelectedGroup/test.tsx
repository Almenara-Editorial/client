import { render, screen } from '@testing-library/react'

import { FilterSelectedGroup } from '.'

describe('<FilterSelectedGroup />', () => {
  it('should render the heading', () => {
    const { container } = render(<FilterSelectedGroup />)

    expect(
      screen.getByRole('heading', { name: /FilterSelectedGroup/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
