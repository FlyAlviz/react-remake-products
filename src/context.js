import React, { useEffect } from 'react'
import carts from './products'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  carts,
  total: 0,
  amount: 0,
}

const getData = () => {
  return localStorage.getItem('init_state')
    ? JSON.parse(localStorage.getItem('init_state'))
    : initialState
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, getData())

  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' })
  }, [state.carts])

  return (
    <AppContext.Provider
      value={{
        toggleAmount,
        state,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return React.useContext(AppContext)
}

export { AppProvider, useGlobalContext }
