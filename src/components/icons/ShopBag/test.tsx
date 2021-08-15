import { render, screen } from '@testing-library/react'

import { ShopBag } from '.'

describe('<ShopBag />', () => {
  it('should render the icon', () => {
    render(<ShopBag aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
