import { render, screen } from '@testing-library/react'

import { Checkmark } from '.'

describe('<Checkmark />', () => {
  it('should render the icon', () => {
    render(<Checkmark aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
