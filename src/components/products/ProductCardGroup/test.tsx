import { render, screen } from '@testing-library/react'

import { ProductCardGroup } from '.'

describe('<ProductCardGroup />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProductCardGroup products={[]} />)

    expect(screen.getByRole('heading', { name: /ProductCardGroup/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
