import { render, screen } from '@testing-library/react'

import { Email } from '.'

describe('<Email />', () => {
  it('should render the icon', () => {
    render(<Email aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
