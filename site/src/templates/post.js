import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Menu from '../atoms/menu'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <div>
        <Helmet
          title={`${post.frontmatter.title} | Code Podcast`}
          meta={[
            {
              name: 'description',
              content: `${post.excerpt}`,
            },
            { name: 'keywords', content: 'software, podcast' },
            { name: 'apple-itunes-app', content: 'app-id=1078095408' },
          ]}
        />

        <div className="page">
          <h1 className="pageTitle">{`Code Podcast`}</h1>
          <Menu />

          <section className="pageContent">
            <div className="postContent">
              <h1>{post.frontmatter.title}</h1>
            </div>
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
