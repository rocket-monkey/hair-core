import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import classNames from 'class-names'
import styles from './about-page.module.scss'
import Content, { HTMLContent } from '../components/Content'
import HorizontalLine from '../components/HorizontalLine'

export const AboutPageTemplate = ({
  title,
  fbLink,
  hero,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div
            className={classNames('column is-10 is-offset-1', styles.wrapper)}
          >
            <h1>{title}</h1>
            {hero && !!hero.fluid ? (
              <Img {...hero} />
            ) : (
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url(${hero})`,
                }}
              />
            )}
            <HorizontalLine />
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      hero={post.frontmatter.image.childImageSharp}
      title={post.frontmatter.title}
      fbLink={post.frontmatter.fbLink}
      content={post.html}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const AboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        fbLink
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
