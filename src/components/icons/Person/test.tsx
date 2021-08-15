import { render, screen } from '@testing-library/react'

import { Person } from '.'

describe('<Person />', () => {
  it('should render the icon', () => {
    render(<Person aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
