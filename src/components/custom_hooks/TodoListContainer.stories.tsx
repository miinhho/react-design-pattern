import type { Meta, StoryObj } from '@storybook/react-vite'
import TodoListContainer from './TodoListContainer'

const meta: Meta<typeof TodoListContainer> = {
  title: 'Components/Custom Hooks',
  component: TodoListContainer,
}

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {},
}
