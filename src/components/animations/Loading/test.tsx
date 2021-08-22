import { render, screen } from '@testing-library/react'

import { Loading } from '.'

describe('<Loading />', () => {
  it('should render the icon', () => {
    render(<Loading aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
