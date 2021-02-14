import { render, screen } from '@testing-library/react'
import { MdSearch } from 'react-icons/md'

import Button from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    const { container } = render(<Button>Pesquisar</Button>)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText(/pesquisar/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render spinner when the button loading is true', () => {
    const { container } = render(<Button loading={true}>Pesquisar</Button>)

    expect(screen.getByTestId('loader')).toHaveClass('loader')
    expect(screen.queryByText(/pesquisar/i)).not.toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render button with icon', () => {
    const { container } = render(<Button icon={MdSearch}>Pesquisar</Button>)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByTestId('button-icon')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
