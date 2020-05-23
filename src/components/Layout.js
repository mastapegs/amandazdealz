import React from 'react'
import { Link } from 'gatsby'
import Navigation from './Navigation'
import './Layout.css'
import styles from './Layout.module.css'

const Layout = ({ children: page }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.hero}>
          <Link className={styles.link} to={'/'}>Amandaz Dealz</Link>
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