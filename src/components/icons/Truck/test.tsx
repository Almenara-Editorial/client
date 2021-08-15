import { render, screen } from '@testing-library/react'

import { Truck } from '.'

describe('<Truck />', () => {
  it('should render the icon', () => {
    render(<Truck aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
