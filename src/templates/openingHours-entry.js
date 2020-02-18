import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import Content from '../components/Content'

export const OpeningHoursTemplate = ({
  content,
  contentComponent,
  description,
  tags,
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
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

OpeningHoursTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const OpeningHours = ({ data }) => {
  // const { markdownRemark: post } = data

  return <pre>{JSON.stringify(data, null, 2)}</pre>

  // return (
  //   <OpeningHoursTemplate
  //     content={post.html}
  //     contentComponent={HTMLContent}
  //     description={post.frontmatter.description}
  //     helmet={
  //       <Helmet titleTemplate="%s | Blog">
  //         <title>{`${post.frontmatter.title}`}</title>
  //         <meta
  //           name="description"
  //           content={`${post.frontmatter.description}`}
  //         />
  //       </Helmet>
  //     }
  //     tags={post.frontmatter.tags}
  //     title={post.frontmatter.title}
  //   />
  // )
}

OpeningHours.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default OpeningHours
