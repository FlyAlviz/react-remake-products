import React from 'react'
import { useGlobalContext } from './context'

const FooterStat = () => {
  const {
    state: { total, amount },
  } = useGlobalContext()
  return (
    <footer>
      <ul>
        <li>
          Total:<span className='colorChangeText'>{total}</span>
        </li>
        <li>
          Amount:<span className='colorChangeText'>{amount / 100}</span>
        </li>
      </ul>
    </footer>
  )
}

export default FooterStat
