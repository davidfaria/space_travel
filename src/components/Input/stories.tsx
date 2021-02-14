import { Story, Meta } from '@storybook/react/types-6-0'
import { MdSearch } from 'react-icons/md'
import Input from '.'

export default {
  title: 'Input',
  component: Input
} as Meta

export const Default: Story = () => (
  <Input
    type="search"
    name="search"
    icon={MdSearch}
    placeholder="Digite a distância: ex: 1000000"
  />
)
