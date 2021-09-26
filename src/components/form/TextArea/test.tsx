import { render, screen } from '@testing-library/react'

import { TextArea } from '.'

describe('<TextArea />', () => {
  it('should render the heading', () => {
    const { container } = render(<TextArea />)

    expect(
      screen.getByRole('heading', { name: /TextArea/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
