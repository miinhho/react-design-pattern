import type { Meta, StoryObj } from '@storybook/react-vite'
import DefaultCounter from './DefaultCounter'

const meta: Meta<typeof DefaultCounter> = {
  title: 'Components/Render Props',
  component: DefaultCounter,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
