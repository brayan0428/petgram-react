import React from 'react'
import { useStateValue } from '../Context'
import styled from 'styled-components'
export const User = () => {
  const [, dispatch] = useStateValue()

  const logout = () => {
    dispatch({
      type: 'LOGOUT'
    })
  }
  return (
    <>
      <Button onClick={logout}>Cerrar Sesión</Button>
    </>
  )
}

const Button = styled.button`
  background: #1632ED;
  color: white;
  padding: 8px;
  text-transform:uppercase;
  border-radius: 5px;
  margin-top: 10px;
  width: 100%;
`
