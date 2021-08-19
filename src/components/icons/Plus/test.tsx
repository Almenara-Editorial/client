import { render, screen } from '@testing-library/react'

import { Plus } from '.'

describe('<Plus />', () => {
  it('should render the icon', () => {
    render(<Plus aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
