import { render, screen } from '@testing-library/react'

import { HeaderAccount } from '.'

describe('<HeaderAccount />', () => {
  it('should render the heading', () => {
    const { container } = render(<HeaderAccount fullName="Teste" />)

    expect(screen.getByRole('heading', { name: /HeaderAccount/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
