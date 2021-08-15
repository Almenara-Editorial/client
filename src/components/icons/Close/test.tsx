import { render, screen } from '@testing-library/react'

import { Close } from '.'

describe('<Close />', () => {
  it('should render the icon', () => {
    render(<Close aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
