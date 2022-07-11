import Box from './Box'

export default {
  title: 'Design System/Atoms/Box',
  component: Box,
  argTypes: {
    color: {
      control: { type: 'color' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
}

export const Common = ({ size, color }) => <Box size={size} color={color} />
