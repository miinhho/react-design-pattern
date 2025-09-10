import type { Meta, StoryObj } from '@storybook/react-vite'
import ToggleButton from './ToggleButton'

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/Compound',
  component: ToggleButton,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
