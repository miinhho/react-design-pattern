import type { Meta, StoryObj } from '@storybook/react-vite'
import LoginForm from './LoginForm'

const meta: Meta<typeof LoginForm> = {
  title: 'Components/State Reducer',
  component: LoginForm,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
