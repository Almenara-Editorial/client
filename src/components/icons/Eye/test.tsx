import { render, screen } from '@testing-library/react'

import { Eye } from '.'

describe('<Eye />', () => {
  it('should render the icon', () => {
    render(<Eye aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
