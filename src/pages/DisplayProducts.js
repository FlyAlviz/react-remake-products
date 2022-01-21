import React from 'react'
import { useGlobalContext } from '.././context'
import carts from '../products'

const DisplayProducts = () => {
  const { toggleAmount } = useGlobalContext()

  return (
    <section className='content-container'>
      {carts.map((product, index) => {
        const { name, price, quantity, id } = product
        return (
          <article className='product' key={id}>
            <span>
              <strong>{name}</strong> - {price / 100}
            </span>
            <button
              className='product-btn'
              onClick={() => toggleAmount(id, 'inc')}
            >
              Add to cart
            </button>
          </article>
        )
      })}
    </section>
  )
}

export default DisplayProducts
