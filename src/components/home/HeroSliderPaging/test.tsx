import { render, screen } from '@testing-library/react'

import { HeroSliderPaging } from '.'

describe('<HeroSliderPaging />', () => {
  it('should render the heading', () => {
    const { container } = render(<HeroSliderPaging />)

    expect(screen.getByRole('heading', { name: /HeroSliderPaging/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
