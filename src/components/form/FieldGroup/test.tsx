import { render, screen } from '@testing-library/react'

import { FieldGroup } from '.'

describe('<FieldGroup />', () => {
  it('should render the heading', () => {
    const { container } = render(<FieldGroup />)

    expect(
      screen.getByRole('heading', { name: /FieldGroup/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
