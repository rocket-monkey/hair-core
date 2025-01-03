import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Content, { HTMLContent } from '../components/Content'
import HorizontalLine from '../components/HorizontalLine'

export const AppointmentPageTemplate = ({
  title,
  hero,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1>{title}</h1>
            {hero && !!hero.fluid ? (
              <Img {...hero} />
            ) : (
              hero && (
                <>
                  <div
                    className="full-width-image-container margin-top-0"
                    style={{
                      backgroundImage: `url(${hero})`,
                    }}
                  />
                  <HorizontalLine />
                </>
              )
            )}
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

AppointmentPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AppointmentPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AppointmentPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      hero={post.frontmatter.image && post.frontmatter.image.childImageSharp}
      content={post.html}
    />
  )
}

AppointmentPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AppointmentPage

export const appointmentPageQuery = graphql`
  query AppointmentPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
      }
    }
  }
`
