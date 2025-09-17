import type { Meta, StoryObj } from '@storybook/react-vite'
import TodoList from './TodoList'

const meta: Meta<typeof TodoList> = {
  title: 'Components/Custom Hooks',
  component: TodoList,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
