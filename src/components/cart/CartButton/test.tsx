import { render, screen } from '@testing-library/react'

import { CartButton } from '.'

describe('<CartButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartButton />)

    expect(screen.getByRole('heading', { name: /CartButton/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
