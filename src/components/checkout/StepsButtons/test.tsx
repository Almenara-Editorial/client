import { render, screen } from '@testing-library/react'

import { StepsButtons } from '.'

describe('<StepsButtons />', () => {
  it('should render the heading', () => {
    const { container } = render(<StepsButtons />)

    expect(
      screen.getByRole('heading', { name: /StepsButtons/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
