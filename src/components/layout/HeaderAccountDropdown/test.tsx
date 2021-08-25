import { render, screen } from '@testing-library/react'

import { HeaderAccountDropdown } from '.'

describe('<HeaderAccountDropdown />', () => {
  it('should render the heading', () => {
    const { container } = render(<HeaderAccountDropdown />)

    expect(screen.getByRole('heading', { name: /HeaderAccountDropdown/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
