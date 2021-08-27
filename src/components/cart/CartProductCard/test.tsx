import { render, screen } from '@testing-library/react'

import { CartProductCard } from '.'

describe('<CartProductCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartProductCard product={{ name: '', price: 1, slug: 'a', thumbnailSrc: ' ' }} />)

    expect(screen.getByRole('heading', { name: /CartProductCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
