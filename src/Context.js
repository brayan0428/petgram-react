import React, { useContext, createContext, useReducer } from 'react'

const Context = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuth: true
      }
    default:
      return state
  }
}

const initialState = {
  isAuth: false
}

export const Provider = ({ children }) => {
  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Context.Provider>
  )
}

export const useStateValue = () => useContext(Context)
