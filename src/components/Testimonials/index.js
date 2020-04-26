import React from 'react'
import Img from 'gatsby-image'
import styles from './styles.module.scss'

export const Testimonials = ({ testimonials }) => {
  if (!testimonials.edges.length) {
    return null
  }

  return (
    <div className={styles.testimonials}>
      <hr />
      <div className={styles.flex}>
        {testimonials.edges.map((t, index) => {
          const { title, image } = t.node.frontmatter
          return (
            <div key={`testimonial-${index}`} className={styles.entry}>
              <h3>{title}</h3>
              {image && <Img {...image.childImageSharp} />}
              <p dangerouslySetInnerHTML={{ __html: t.node.html }} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
