import { render, screen, fireEvent } from '@testing-library/react'
import { MdSearch } from 'react-icons/md'

import Input from '.'

describe('<Input />', () => {
  it('should render the value when typed', async () => {
    const { container } = render(
      <Input
        type="search"
        name="search"
        icon={MdSearch}
        placeholder="Digite a distância: ex: 1000000"
      />
    )

    const input = screen.getByRole('searchbox')

    expect(
      screen.getByPlaceholderText(/Digite a distância: ex: 1000000/i)
    ).toBeInTheDocument()

    expect(input).toBeInTheDocument()

    fireEvent.change(input, {
      target: { value: '1000000' }
    })

    expect(input).toHaveValue('1000000')

    expect(container.firstChild).toMatchSnapshot()
  })
})
