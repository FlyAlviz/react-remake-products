import React from 'react'
import { useGlobalContext } from '.././context'

const DisplayCarts = () => {
  const {
    state: { total, amount, carts },
    toggleAmount,
  } = useGlobalContext()

  if (total > 0) {
    return (
      <section className='content-container'>
        {carts.map((product, index) => {
          const { name, price, quantity, id } = product
          if (quantity > 0) {
            return (
              <article className='product' key={id}>
                <span>
                  <strong>{name}</strong> - {price / 100}
                  {quantity ? ` (${quantity})` : null}
                </span>
                <button
                  className='product-btn'
                  onClick={() => toggleAmount(id, 'dec')}
                >
                  Remove from the cart
                </button>
              </article>
            )
          }
        })}
      </section>
    )
  }

  return (
    <section className='content-container'>
      <h1>No items in the cart yet</h1>
    </section>
  )
}

export default DisplayCarts
