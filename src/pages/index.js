import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    // const { edges: posts } = data.blogPosts
    // const { edges: events } = data.events
    const {
      frontmatter: { images },
    } = data.imagesStore
    console.log({ images })

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
              <div className="column is-10 is-offset-1">
                {images.map(data => {
                  const { Image } = data
                  if (!Image) {
                    console.log('wtf', data)

                    return null
                  }
                  return (
                    <div>
                      <Img fluid={Image.childImageSharp.fluid} />
                    </div>
                  )
                })}
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
    imagesStore: markdownRemark(
      frontmatter: { templateKey: { eq: "images-store" } }
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
    images: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "images-store" } } }
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
