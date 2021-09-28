import { render, screen } from '@testing-library/react'

import { SelectAddressButton } from '.'

describe('<SelectAddressButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<SelectAddressButton />)

    expect(
      screen.getByRole('heading', { name: /SelectAddressButton/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
