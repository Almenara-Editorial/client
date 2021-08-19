import { render, screen } from '@testing-library/react'

import { NumberField } from '.'

describe('<NumberField />', () => {
  it('should render the heading', () => {
    const { container } = render(<NumberField />)

    expect(screen.getByRole('heading', { name: /NumberField/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
