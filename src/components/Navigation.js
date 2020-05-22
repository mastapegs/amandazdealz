import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  const links = [
    {
      href: '/',
      linkText: 'Home'
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
      <ul>
        {links.map(({ href, linkText }) => (
          <li key={href}>
            <Link to={href}>
              {linkText}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation