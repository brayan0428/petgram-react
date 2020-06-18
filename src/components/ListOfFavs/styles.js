import styled from 'styled-components'

export const Grid = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  height: 100%;
`

export const Img = styled.img`
  object-fit:cover;
  width: 100%;
`
