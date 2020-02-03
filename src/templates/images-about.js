import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

export const ImagesAboutTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

ImagesAboutTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ImagesAbout = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ImagesAboutTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

ImagesAbout.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ImagesAbout

export const imagesAboutQuery = graphql`
  query ImagesAbout($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
