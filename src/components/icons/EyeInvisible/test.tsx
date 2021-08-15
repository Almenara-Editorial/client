import { render, screen } from '@testing-library/react'

import { EyeInvisible } from '.'

describe('<EyeInvisible />', () => {
  it('should render the icon', () => {
    render(<EyeInvisible aria-label="icon" />)

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()
  })
})
