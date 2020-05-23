import React from 'react'
import { Link } from 'gatsby'
import styles from './Navigation.module.css'

const Navigation = () => {
  const links = [
    {
      href: '/shop',
      linkText: 'Shop'
    },
    {
      href: '/about',
      linkText: 'About'
    },
    {
      href: '/contact',
      linkText: 'Contact'
    },
    {
      href: '/blog',
      linkText: 'Blog'
    },
  ]
  return (
    <nav>
      <ul className={styles.navList}>
        {links.map(({ href, linkText }) => (
          <li className={styles.navItems} key={href}>
            <Link className={styles.navLinks} to={href}>
              {linkText}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation