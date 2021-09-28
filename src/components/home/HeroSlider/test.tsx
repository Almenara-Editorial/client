import { render, screen } from '@testing-library/react'

import { HeroSlider } from '.'

describe('<HeroSlider />', () => {
  it('should render the heading', () => {
    const { container } = render(<HeroSlider images={[]} />)

    expect(
      screen.getByRole('heading', { name: /HeroSlider/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
