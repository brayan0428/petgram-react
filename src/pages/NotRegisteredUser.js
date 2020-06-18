import React, { useState } from 'react'
import { useStateValue } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'
import { LoginMutation } from '../containers/LoginMutation'

export const NotRegisteredUser = () => {
  const [registro, setRegistro] = useState(false)
  const [{}, dispatch] = useStateValue()

  const loginUser = (token) => {
    window.sessionStorage.setItem('token', token)
    dispatch({
      type: 'LOGIN',
      payload: token
    })
  }
  return (
    <>
      {
        registro
          ? <RegisterMutation>
            {
              (register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(({ data }) => {
                    const { signup } = data
                    loginUser(signup)
                  })
                }
                error = error && 'Se presento un error al guardar'
                return (<UserForm loading={loading} onSubmit={onSubmit} title='Registrarme' registro={registro} onClick={() => setRegistro(false)} error={error} />)
              }
            }
          </RegisterMutation>
          : <LoginMutation>
            {
              (login, { data, error, loading }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  login({ variables }).then(({ data }) => {
                    const { login } = data
                    loginUser(login)
                  })
                }
                error = error && 'Usuario o contraseña invalidos'
                return (<UserForm loading={loading} onSubmit={onSubmit} title='Iniciar Sesión' registro={registro} onClick={() => setRegistro(true)} error={error} />)
              }
            }
            </LoginMutation>
      }
    </>
  )
}
