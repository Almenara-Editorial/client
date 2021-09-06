import { render, screen } from '@testing-library/react'

import { Whatsapp } from '.'

describe('<Whatsapp />', () => {
  it('should render the icon', () => {
    render(<Whatsapp aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
