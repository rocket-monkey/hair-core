import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

export const ProductPostTemplate = ({
  content,
  contentComponent,
  image,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1>{title}</h1>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

ProductPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ProductPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ProductPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      image={post.frontmatter.image}
      helmet={
        <Helmet titleTemplate="%s | Produkt">
          <title>{`${post.frontmatter.title}`}</title>
        </Helmet>
      }
      title={post.frontmatter.title}
    />
  )
}

ProductPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProductPost

export const pageQuery = graphql`
  query ProductPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
