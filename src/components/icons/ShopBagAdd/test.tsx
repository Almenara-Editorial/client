import { render, screen } from '@testing-library/react'

import { ShopBagAdd } from '.'

describe('<ShopBagAdd />', () => {
  it('should render the icon', () => {
    render(<ShopBagAdd aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
