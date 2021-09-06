import { render, screen } from '@testing-library/react'

import { Instagram } from '.'

describe('<Instagram />', () => {
  it('should render the icon', () => {
    render(<Instagram aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
