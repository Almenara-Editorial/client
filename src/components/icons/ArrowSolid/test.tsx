import { render, screen } from '@testing-library/react'

import { ArrowSolid } from '.'

describe('<ArrowSolid />', () => {
  it('should render the icon', () => {
    render(<ArrowSolid aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
