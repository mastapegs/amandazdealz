import React from 'react'
import Navigation from './Navigation'
import './Layout.css'

const Layout = ({ children: page }) => {
  return (
    <>
      <Navigation />
      {page}
    </>
  )
}

export default Layout