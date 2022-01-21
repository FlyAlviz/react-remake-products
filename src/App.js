import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import carts from './products'
import Navbar from './Navbar'
import DisplayCarts from './pages/DisplayCarts'
import DisplayProducts from './pages/DisplayProducts'
import { links } from './paths'
import FooterStat from './FooterStat'

const App = () => {
  const { url } = links.find((item) => item.defaultPath)
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Navigate replace to={url} />} />
        <Route path='*' element={<Navigate replace to={url} />} />
        {links.map((link) => {
          const { url, page, id } = link
          return <Route key={id} path={url} element={page} />
        })}
      </Routes>
      <FooterStat />
    </Router>
  )
}

export default App
