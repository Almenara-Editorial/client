import { render, screen } from '@testing-library/react'

import { Steps } from '.'

describe('<Steps />', () => {
  it('should render the heading', () => {
    const { container } = render(<Steps />)

    expect(screen.getByRole('heading', { name: /Steps/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
