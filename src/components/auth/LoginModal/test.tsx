import { render, screen } from '@testing-library/react'

import { LoginModal } from '.'

describe('<LoginModal />', () => {
  it('should render the heading', () => {
    const { container } = render(<LoginModal />)

    expect(screen.getByRole('heading', { name: /LoginModal/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
