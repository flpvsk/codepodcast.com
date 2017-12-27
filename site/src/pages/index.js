import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Menu from '../atoms/menu';


const PostSummary = (props) => (
  <article className='postSummary'>
    <header className='postSummary__title'>
      <Link to={props.href}>
        {props.title}
      </Link>
    </header>
    <div className='postSummary__date'>{props.date}</div>
    <summary className='postSummary__summary'>
      {props.summary}
    </summary>
  </article>
);


export default (props) => {
  const postSummaries = props.data.allMarkdownRemark.edges;

  return (
    <div>
      <Helmet
        title="Code Podcast"
        meta={[
          {
            name: 'description',
            content: 'Ideas that shape the way we build software'
          },
          { name: 'keywords', content: 'software, podcast' },
        ]} />

      <div className='page'>
        <h1 className='pageTitle'>Code Podcast</h1>
        <Menu />

        <section className='pageContent'>
          <ul className='postList'>
              {
                postSummaries.map((post, i) => (
                  <li key={i} className='postList__item'>
                    <PostSummary
                      href={`posts${post.node.fields.slug}`}
                      title={post.node.frontmatter.title}
                      date={post.node.frontmatter.date}
                      summary={post.node.excerpt} />
                  </li>
                ))
              }
          </ul>
        </section>
      </div>
    </div>
  );
};


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
