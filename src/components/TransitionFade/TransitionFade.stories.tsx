import {
  Meta,
  StoryObj
} from '@storybook/react'

import {
  TransitionFade,
  TransitionFadeProps
} from '.'

export default {
  title: 'Components/TransitionFade',
  component: TransitionFade,
  args: {
    open: true,
    children: (
      <div
        style={ {
          width: 100,
          height: 100,
          background: 'red'
        } }
      />
    )
  },
  argTypes: { children: { table: { disable: true } } }
} as Meta<TransitionFadeProps>

export const Default: StoryObj<TransitionFadeProps> = {}
