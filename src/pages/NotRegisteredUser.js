import React, { useState } from 'react'
import { useStateValue } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'

export const NotRegisteredUser = () => {
  const [registro, setRegistro] = useState(false)
  const [{}, dispatch] = useStateValue()

  const loginUser = () => {
    dispatch({
      type: 'LOGIN',
      payload: {}
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
                  register({ variables }).then(() => loginUser())
                }
                return (<UserForm loading={loading} onSubmit={onSubmit} title='Registrarme' registro={registro} onClick={() => setRegistro(false)} error={error} />)
              }
            }
          </RegisterMutation>
          : <>
            <UserForm onSubmit={loginUser} title='Iniciar Sesión' registro={registro} onClick={() => setRegistro(true)} />
            </>
      }
    </>
  )
}
