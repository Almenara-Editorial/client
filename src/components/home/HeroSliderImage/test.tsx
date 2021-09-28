import { render, screen } from '@testing-library/react'

import { HeroSliderImage } from '.'

describe('<HeroSliderImage />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <HeroSliderImage image={{ url: '', src: '' }} />
    )

    expect(
      screen.getByRole('heading', { name: /HeroSliderImage/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
