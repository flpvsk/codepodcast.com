import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Menu from '../atoms/menu'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const title = `${post.frontmatter.title} | Code Podcast`;
    const description = post.excerpt;

    return (
      <div>
        <Helmet
          title={title}
          meta={[
            {
              name: 'description',
              content: description,
            },
            { name: 'keywords', content: 'software, podcast' },
            { name: 'apple-itunes-app', content: 'app-id=1078095408' },

            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:image',
              content: 'https://codepodcast.com/images/code-logo-dark-400.png' },
            { name: 'twitter:site', content: '@podcastcode' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
          ]}
        />

        <div className="page">
          <div className="titleFrame">
            <h1 className='titleText'>Code Podcast</h1>
            <h2 className='titleText _withAccent'>
              {post.frontmatter.title}
            </h2>
          </div>
          <Menu />

          <section className="pageContent">
            <div
              className="postContent"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </section>
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
