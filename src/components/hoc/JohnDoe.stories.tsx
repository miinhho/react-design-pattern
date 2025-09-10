import type { Meta, StoryObj } from '@storybook/react-vite'
import JohnDoe from './JohnDoe'

const meta: Meta<typeof JohnDoe> = {
  title: 'Components/HOC',
  component: JohnDoe,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
