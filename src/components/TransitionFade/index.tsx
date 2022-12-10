import { PropsWithChildren } from 'react'

import { Fade } from './styles'

export type TransitionFadeProps = PropsWithChildren<{
  open: boolean
}>

export function TransitionFade ({ open, children }: TransitionFadeProps) {
  return (
    <Fade $open={ open }>
      {children}
    </Fade>
  )
}
