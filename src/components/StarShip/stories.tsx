import { Story, Meta } from '@storybook/react/types-6-0'
import StarShip, { StartShipType } from '.'
import mock from './mock'

export default {
  title: 'StarShip',
  component: StarShip,
  args: mock
} as Meta

export const Default: Story<StartShipType> = () => (
  <StarShip starship={mock} distance={1000000} />
)
