import { render, screen } from '@testing-library/react'

import { CartProductCard } from '.'

describe('<CartProductCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartProductCard />)

    expect(screen.getByRole('heading', { name: /CartProductCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
