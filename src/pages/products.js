import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './products.module.scss'

export default class ProductsPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1>Products</h1>

              <table className={styles.table}>
                <tbody>
                  {posts.map(({ node: post }) => {
                    if (!post) {
                      return null
                    }
                    console.log(post)

                    const firstImg = post.frontmatter.image
                    return (
                      <tr>
                        <td>
                          {firstImg && <Img {...firstImg.childImageSharp} />}
                        </td>
                        <td>
                          <h3>{post.frontmatter.title}</h3>
                          <p dangerouslySetInnerHTML={{ __html: post.html }} />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

ProductsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const productsQuery = graphql`
  query ProductsQuery {
    products: markdownRemark(
      frontmatter: { templateKey: { eq: "products-page" } }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "product-post" } } }
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
            templateKey
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
