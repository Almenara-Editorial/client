import { render, screen } from '@testing-library/react'

import { HeroSliderButton } from '.'

describe('<HeroSliderButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<HeroSliderButton />)

    expect(screen.getByRole('heading', { name: /HeroSliderButton/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
