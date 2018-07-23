import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Menu from '../atoms/menu'

const PostSummary = props => (
  <article className="postSummary">
    <header className="postSummary__title">
      <Link to={props.href}>{props.title}</Link>
    </header>
    <div className="postSummary__date">{props.date}</div>
    <summary className="postSummary__summary">{props.summary}</summary>
  </article>
)

export default props => {
  const postSummaries = props.data.allMarkdownRemark.edges
    .filter((edge) => {
      const date = new Date(edge.node.frontmatter.date);
      return date < Date.now();
    });

  return (
    <div>
      <Helmet
        title="Code Podcast"
        meta={[
          {
            name: 'description',
            content: 'Ideas that shape the way we build software',
          },
          { name: 'keywords', content: 'software, podcast' },
          { name: 'apple-itunes-app', content: 'app-id=1078095408' },

          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:image',
            content: 'https://codepodcast.com/images/code-logo-dark-400.png' },
          { name: 'twitter:site', content: '@podcastcode' },
          { name: 'twitter:title', content: 'Code Podcast' },
          { name: 'twitter:description',
            content: 'Ideas that shape the way we build software' },
        ]}
      />

      <div className="page">
        <div className="titleFrame">
          <h1 className='titleText _withAccent'>Code Podcast</h1>
          <h2 className='titleText'>
            Ideas that shape the way we build software
          </h2>
        </div>

        <Menu />

        <section className="pageContent">
          <ul className="postList">
            {postSummaries.map((post, i) => (
              <li key={i} className="postList__item">
                <PostSummary
                  href={`posts${post.node.fields.slug}`}
                  title={post.node.frontmatter.title}
                  date={post.node.frontmatter.date}
                  summary={post.node.excerpt}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query AllPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
          }
        }
      }
    }
  }
`
