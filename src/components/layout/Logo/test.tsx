import { render, screen } from '@testing-library/react'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render the heading', () => {
    render(<Logo />)

    expect(
      screen.getByLabelText(/almenara editorial/i).parentElement
    ).toHaveStyle({
      color: '#rgba(22, 24, 29, 1)'
    })
  })
})
