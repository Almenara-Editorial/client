import { render, screen } from '@testing-library/react'

import { LoginModalHeader } from '.'

describe('<LoginModalHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<LoginModalHeader />)

    expect(screen.getByRole('heading', { name: /LoginModalHeader/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
