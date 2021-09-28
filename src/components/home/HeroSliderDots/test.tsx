import { render, screen } from '@testing-library/react'

import { HeroSliderDots } from '.'

describe('<HeroSliderDots />', () => {
  it('should render the heading', () => {
    const { container } = render(<HeroSliderDots dots={<div />} />)

    expect(
      screen.getByRole('heading', { name: /HeroSliderDots/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
