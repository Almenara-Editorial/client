import { render, screen } from '@testing-library/react'

import { CartProduct } from '.'

describe('<CartProduct />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartProduct />)

    expect(screen.getByRole('heading', { name: /CartProduct/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
