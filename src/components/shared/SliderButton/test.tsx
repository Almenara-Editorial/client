import { render, screen } from '@testing-library/react'

import { SliderButton } from '.'

describe('<SliderButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<SliderButton />)

    expect(
      screen.getByRole('heading', { name: /SliderButton/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
