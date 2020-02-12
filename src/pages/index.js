import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import classNames from 'class-names'
import styles from '../templates/home-page.module.scss'
import { Gallery } from '../components/Gallery'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    // const { edges: posts } = data.blogPosts
    // const { edges: events } = data.events
    const {
      frontmatter: { images },
    } = data.images
    console.log({ data })

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta property="og:title" content="JUR Records" />
          <meta
            property="og:description"
            content="Welcome to JUR Records, dem Schweizer Drum and Bass Label seit 1991."
          />
          <meta
            property="og:image"
            content="blob:https://www.jurrecords.ch/ca2b4c68-2d4c-4fbd-a496-41138572f069"
          />
          <meta property="og:url" content="https://www.jurrecords.ch" />
        </Helmet>
        <section className="section">
          <div className="container content">
            <div className="columns">
              <div
                className={classNames(
                  'column is-10 is-offset-1',
                  styles.wrapper
                )}
              >
                <Gallery images={images} />
                <div dangerouslySetInnerHTML={{ __html: data.home.html }} />
                {/*
                    <BlogPosts posts={posts} />
                  */}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    home: markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
    images: markdownRemark(
      frontmatter: { templateKey: { eq: "images-gallery" } }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        images {
          Image {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    blogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
