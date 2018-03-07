import React from 'react'
import DecoratedLink from './decorated-link'
import Link from 'gatsby-link'

export default () => {
  return (
    <menu className="mainMenu">
      <ul className="mainMenu__list">
        <li className="mainMenu__listItem">
          <Link to="/">
            <DecoratedLink>Main</DecoratedLink>
          </Link>
        </li>

        <li className="mainMenu__listItem">
          <Link to="/about">
            <DecoratedLink>About</DecoratedLink>
          </Link>
        </li>

        <li className="mainMenu__listItem">
          <a
            href="https://www.patreon.com/codepodcast">
            <DecoratedLink>Patreon</DecoratedLink>
          </a>
        </li>

        <li className="mainMenu__listItem">
          <a
            target="_blank"
            href="http://feeds.soundcloud.com/users/soundcloud:users:201515747/sounds.rss"
          >
            <DecoratedLink>RSS</DecoratedLink>
          </a>
        </li>
      </ul>
    </menu>
  )
}
