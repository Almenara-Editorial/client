import { render, screen } from '@testing-library/react'

import { Heart } from '.'

describe('<Heart />', () => {
  it('should render the icon', () => {
    render(<Heart aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
