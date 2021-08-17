import { render, screen } from '@testing-library/react'

import { HeartSolid } from '.'

describe('<HeartSolid />', () => {
  it('should render the icon', () => {
    render(<HeartSolid aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
