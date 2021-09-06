import { render, screen } from '@testing-library/react'

import { Facebook } from '.'

describe('<Facebook />', () => {
  it('should render the icon', () => {
    render(<Facebook aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
