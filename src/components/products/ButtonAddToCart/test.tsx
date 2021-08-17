import { render, screen } from '@testing-library/react'

import { ButtonAddToCart } from '.'

describe('<ButtonAddToCart />', () => {
  it('should render the button', () => {
    render(<ButtonAddToCart isInCart={false} />)

    expect(screen.getByLabelText(/adicionar ao carrinho/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /cart icon/i })).toBeInTheDocument()
  })
})
