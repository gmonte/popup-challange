import styled from 'styled-components'

export const TransitionFade = styled.div<{ $open: boolean }>`
  display: inline-block;
  opacity: ${ ({ $open }) => $open ? 1 : 0 };
  visibility: ${ ({ $open }) => $open ? 'visible' : 'hidden' };
  animation: ${ ({ $open }) => $open ? 'fadeIn' : 'fadeOut' } 0.1s linear;
  transition: visibility 0.1s linear, opacity 0.1s linear;
`
