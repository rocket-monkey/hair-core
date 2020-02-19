import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { OpeningHours } from '../components/OpeningHours'
import { Holidays } from '../components/Holidays'
import { Testimonials } from '../components/Testimonials'
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

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta property="og:title" content="JUR Records" />
          <meta
            property="og:description"
            content="Haircore - Finde dein inneres Core. Mit Pascale Professional Hairdresser"
          />
          <meta
            property="og:image"
            content="blob:http://haircore.ch/static/f0a131a85faaa1593b1cdfab75466ea2/774d6/logo.png"
          />
          <meta property="og:url" content="https://www.haircore.ch" />
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
                <OpeningHours openingHours={data.openingHours} />
                <Holidays holidays={data.holidays} />
                <Testimonials testimonials={data.testimonials} />
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
    openingHours: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "openingHours-entry" } } }
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
            hours
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    holidays: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "holidays-entry" } } }
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
            from
            to
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    testimonials: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "testimonial-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          html
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            date(formatString: "MMMM DD, YYYY")
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
