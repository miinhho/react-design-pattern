import type { Meta, StoryObj } from '@storybook/react-vite'
import Hello from './Hello'

const meta: Meta<typeof Hello> = {
  title: 'Components/Data Provider',
  component: Hello,
}

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {},
}
