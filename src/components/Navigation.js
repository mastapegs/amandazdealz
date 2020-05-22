import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  const links = [
    {
      href: '/',
      linkText: 'Home'
    }
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