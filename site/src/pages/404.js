import React from 'react'
import Menu from '../atoms/menu';

const NotFoundPage = () => (
  <div className="page">
    <h1 className="pageTitle">{`Code Podcast`}</h1>
    <Menu />

    <section className="pageContent">
      <div className="postContent">
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </section>
  </div>
)

export default NotFoundPage
