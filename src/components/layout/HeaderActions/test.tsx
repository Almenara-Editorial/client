import { render, screen } from '@testing-library/react'

import { HeaderActions } from '.'

describe('<HeaderActions />', () => {
  it('should render the heading', () => {
    const { container } = render(<HeaderActions />)

    expect(screen.getByRole('heading', { name: /HeaderActions/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
