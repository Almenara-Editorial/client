import { render, screen } from '@testing-library/react'

import { StepsForms } from '.'

describe('<StepsForms />', () => {
  it('should render the heading', () => {
    const { container } = render(<StepsForms />)

    expect(
      screen.getByRole('heading', { name: /StepsForms/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
