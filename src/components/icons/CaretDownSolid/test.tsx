import { render, screen } from '@testing-library/react'

import { CaretDownSolid } from '.'

describe('<CaretDownSolid />', () => {
  it('should render the icon', () => {
    render(<CaretDownSolid aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
