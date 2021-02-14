import { render, screen } from '@testing-library/react'
import mock from './mock'

import StarShip from '.'

describe('<StarShip />', () => {
  it('should render the starship', () => {
    const { container } = render(
      <StarShip distance={1000000} starship={mock} />
    )
    const imgShip = screen.getByRole('img', {
      name: /rocket ship/i
    })

    const imgStop = screen.getByRole('img', {
      name: /Stop Soard/i
    })

    expect(screen.getByText(/Millennium Falcon/)).toBeInTheDocument()
    expect(screen.getByText(/9/)).toBeInTheDocument()
    expect(imgShip).toBeInTheDocument()
    expect(imgStop).toBeInTheDocument()

    expect(imgShip).toHaveStyleRule('width', '32px')
    expect(imgStop).toHaveStyleRule('width', '48px')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the startship widthout distance prop', () => {
    const { container } = render(<StarShip starship={mock} />)
    expect(screen.getByText('*****')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the startship width consumables UNKNOW', () => {
    const mockUnknow = { ...mock, MGLT: undefined, consumables: 'unknow' }
    const { container } = render(
      <StarShip starship={mockUnknow} distance={1000000} />
    )

    expect(screen.getByText('*****')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
