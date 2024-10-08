import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

export const InfoPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1>{title}</h1>
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

InfoPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const InfoPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <InfoPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

InfoPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default InfoPage

export const InfoPageQuery = graphql`
  query InfoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
