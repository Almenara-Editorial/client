import { render, screen } from '@testing-library/react'

import { ShopBagSolid } from '.'

describe('<ShopBagSolid />', () => {
  it('should render the icon', () => {
    render(<ShopBagSolid aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
