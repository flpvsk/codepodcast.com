import React from 'react'
import Helmet from 'react-helmet'
import Menu from '../atoms/menu'
import logo from '../images/logo-dark.svg'

export default props => {
  return (
    <div>
      <Helmet
        title="About | Code Podcast"
        meta={[
          {
            name: 'description',
            content: 'About page',
          },
          { name: 'keywords', content: 'software, podcast' },
          { name: 'apple-itunes-app', content: 'app-id=1078095408' },
        ]}
      />

      <div className="page">
        <h1 className="pageTitle">Code Podcast | About</h1>
        <Menu />

        <section className="pageContent">
          <img className="logo" src={logo} />
          <p>
            {`Code Podcast is about ideas that shape the way we build
              software. It's like Planet Money for developers.`}
          </p>
          <p>
            {`Each episode we interview people with different views on a
              single topic. We break down complex ideas to present why and
              how they are used to build modern software.`}
          </p>
          <p>
            {`Code Podcast is made by `}
            <a href="https://twitter.com/flpvsk">Andrey Salomatin</a>
            {` and `}
            <a href="mailto:michael@codepodcast.com">Michael Beschastnov</a>.
          </p>
          <p>
            {`Find us on `}
            <a href="https://itunes.apple.com/us/podcast/code-podcast/id1078095408?l=en">itunes</a>
            {`, `}
            <a href="https://twitter.com/podcastcode">twitter</a>
            {`, `}
            <a href="https://soundcloud.com/podcastcode">soundcloud</a>
            {` and `}
            <a href="https://www.facebook.com/Codepodcast">facebook</a>.
          </p>
          <p>
            {`Support the podcast on `}
            <a href="https://www.patreon.com/codepodcast">patreon</a>.
          </p>
        </section>
      </div>
    </div>
  )
}
