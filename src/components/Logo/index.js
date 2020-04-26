import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './styles.module.scss'

export const Logo = ({ image }) => {
  if (!image) {
    return null
  }

  return (
    <section className={styles.wrapper}>
      <div className="container content">
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <Img fluid={image.childImageSharp.fluid} />
          </Link>
          <div className={styles.slogan}>
            <strong>Finde dein inneres Core.</strong> Mit Pascale Professional
            Hairdresser
          </div>
        </div>
      </div>
    </section>
  )
}
