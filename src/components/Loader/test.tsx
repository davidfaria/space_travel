import { render, screen } from '@testing-library/react'

import Loader from '.'

describe('<Loader />', () => {
  it('should render loader', () => {
    const { container } = render(<Loader loading={true} />)
    const spinner = screen.getByTestId('loader')
    expect(spinner).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should not render loader', () => {
    const { container } = render(<Loader />)
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
