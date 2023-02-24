import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Similique, quas iste provident officia dolorem dicta suscipit? Ab beatae quae excepturi, harum pariatur reiciendis maxime quod, quibusdam nam totam ea dolore?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
