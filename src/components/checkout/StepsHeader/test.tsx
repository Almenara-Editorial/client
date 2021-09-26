import { render, screen } from '@testing-library/react'

import { StepsHeader } from '.'

describe('<StepsHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<StepsHeader />)

    expect(
      screen.getByRole('heading', { name: /StepsHeader/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
