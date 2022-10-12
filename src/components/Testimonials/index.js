import React from 'react'
import Img from 'gatsby-image'
import { testimonials, flex, entry } from './styles.module.scss'

export const Testimonials = props => {
  if (!props.testimonials.edges.length) {
    return null
  }

  return (
    <div className={testimonials}>
      <hr />
      <div className={flex}>
        {props.testimonials.edges.map((t, index) => {
          const { title, image } = t.node.frontmatter
          return (
            <div key={`testimonial-${index}`} className={entry}>
              <h3>{title}</h3>
              {image && <Img {...image.childImageSharp} />}
              <div dangerouslySetInnerHTML={{ __html: t.node.html }} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
