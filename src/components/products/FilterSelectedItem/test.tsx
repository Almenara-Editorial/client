import { render, screen } from '@testing-library/react'

import { FilterSelectedItem } from '.'

describe('<FilterSelectedItem />', () => {
  it('should render the heading', () => {
    const { container } = render(<FilterSelectedItem />)

    expect(screen.getByRole('heading', { name: /FilterSelectedItem/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
