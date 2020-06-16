import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  margin: 10px 0;
  display:flex;
  justify-content:center;
  -webkit-tap-highlight-color: transparent;
`
export const Svg = styled.svg`
  width: 220px;
  margin-left: -10px;
  margin-top: -30px;
`
