import type { Meta, StoryObj } from '@storybook/react-vite'
import Header from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Data Provider',
  component: Header,
}

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {},
}
