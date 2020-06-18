import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Aviso, Accion, Error } from './styles'
import { Loader } from '../Loader'

export const UserForm = ({ registro, title, onSubmit, onClick, error, loading }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input type='email' placeholder='Usuario' {...email} />
        <Input type='password' placeholder='Contraseña' {...password} />
        <Button disabled={loading}>{title}</Button>
      </Form>
      {
        error && <Error>Se presento un error al guardar</Error>
      }
      {
        registro
          ? <Aviso>Ya tienes una cuenta? <Accion onClick={onClick}>Iniciar Sesión</Accion></Aviso>
          : <Aviso>No tienes una cuenta? <Accion onClick={onClick}>Registrate</Accion></Aviso>
      }
      {
        loading && <Loader />
      }
    </>

  )
}
