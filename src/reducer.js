const reducer = (state, action) => {
  try {
    const Type = (type) => {
      return action.type === type
    }

    let conState = state

    if (Type('GET_TOTAL')) {
      const { total, amount } = state.carts.reduce(
        (itemTotal, cartItem) => {
          const { quantity, price } = cartItem
          itemTotal.amount += price * quantity
          itemTotal.total += quantity
          return itemTotal
        },
        {
          total: 0,
          amount: 0,
        }
      )
      conState = { ...state, total, amount }
    }

    if (Type('TOGGLE_AMOUNT')) {
      const newItem = state.carts.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return { ...item, quantity: item.quantity + 1 }
          }
          if (action.payload.type === 'dec') {
            return { ...item, quantity: item.quantity - 1 }
          }
        }
        return item
      })
      conState = { ...state, carts: newItem }
    }
    localStorage.setItem('init_state', JSON.stringify(conState))
    return conState
  } catch (error) {
    throw new Error(error)
  }
}

export default reducer
