import { render, screen } from '@testing-library/react'

import { Search } from '.'

describe('<Search />', () => {
  it('should render the icon', () => {
    render(<Search aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
