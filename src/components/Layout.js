import React from 'react'
import Navigation from './Navigation'
import './Layout.css'
import styles from './Layout.module.css'

const Layout = ({ children: page }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.hero}>
          Amandaz Dealz
        </div>
        <Navigation />
      </header>
      <main>
        {page}
      </main>
    </>
  )
}

export default Layout