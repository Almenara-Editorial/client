import { render, screen } from '@testing-library/react'

import { LoginModalForm } from '.'

describe('<LoginModalForm />', () => {
  it('should render the heading', () => {
    const { container } = render(<LoginModalForm />)

    expect(screen.getByRole('heading', { name: /LoginModalForm/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
