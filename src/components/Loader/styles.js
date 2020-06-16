import styled, { keyframes } from 'styled-components'

const skRotateplane = keyframes`
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
`

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  background-color: #E7424D;
  margin: 100px auto;
  animation: ${skRotateplane} 1.2s infinite ease-in-out;
`
