import React, { useContext, createContext, useReducer } from 'react'

const Context = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuth: action.payload
      }
    default:
      return state
  }
}

const initialState = {
  isAuth: window.sessionStorage.getItem('token')
}

export const Provider = ({ children }) => {
  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Context.Provider>
  )
}

export const useStateValue = () => useContext(Context)
