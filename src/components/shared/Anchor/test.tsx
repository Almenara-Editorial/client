import { render, screen } from '@testing-library/react'

import { Anchor } from '.'

describe('<Anchor />', () => {
  it('should render the heading', () => {
    const { container } = render(<Anchor>Anchor</Anchor>)

    expect(screen.getByRole('heading', { name: /Anchor/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
