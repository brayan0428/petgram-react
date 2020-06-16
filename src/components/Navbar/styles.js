import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    color: #000;

    &:after {
      ${fadeIn({ time: '0.5s' })};
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`
export const Nav = styled.nav`
  height: 50px;
  width: 100%;
  max-width: 500px;
  display:flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  z-index: 1000;
  font-size:32px;
`
