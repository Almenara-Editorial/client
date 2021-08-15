import { render, screen } from '@testing-library/react'

import { CircleInfo } from '.'

describe('<CircleInfo />', () => {
  it('should render the icon', () => {
    render(<CircleInfo aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
