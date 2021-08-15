import { render, screen } from '@testing-library/react'

import { CaretDown } from '.'

describe('<CaretDown />', () => {
  it('should render the icon', () => {
    render(<CaretDown aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
