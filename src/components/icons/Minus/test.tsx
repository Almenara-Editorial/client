import { render, screen } from '@testing-library/react'

import { Minus } from '.'

describe('<Minus />', () => {
  it('should render the icon', () => {
    render(<Minus aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
