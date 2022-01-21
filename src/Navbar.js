import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { links } from './paths'
import { useGlobalContext } from './context'

const Navbar = () => {
  const Location = useLocation()
  const {
    state: { total },
  } = useGlobalContext()
  return (
    <header>
      <nav className='nav-container'>
        <ul>
          {links.map((link, index) => {
            const { url, id, text } = link
            return (
              <li key={id}>
                <Link
                  to={url}
                  className={`nav-btn ${
                    Location.pathname === url ? 'active' : null
                  }`}
                >
                  {text}
                  {text === 'carts' ? ` (${total})` : null}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
