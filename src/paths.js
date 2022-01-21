import React from 'react'
import DisplayCarts from './pages/DisplayCarts'
import DisplayProducts from './pages/DisplayProducts'

const links = [
  {
    id: 1,
    url: '/products',
    text: 'products',
    defaultPath: true,
    page: <DisplayProducts />,
  },
  {
    id: 2,
    url: '/carts',
    text: 'carts',
    page: <DisplayCarts />,
  },
]
export { links }
