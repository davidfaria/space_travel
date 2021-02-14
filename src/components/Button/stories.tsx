import { Story, Meta } from '@storybook/react/types-6-0'
import { MdSearch } from 'react-icons/md'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <Button {...args} icon={MdSearch}>
    Pesquisar
  </Button>
)
export const LoadingButton: Story<ButtonProps> = (args) => (
  <Button {...args} loading={true}>
    Pesquisar
  </Button>
)
