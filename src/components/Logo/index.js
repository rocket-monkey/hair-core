import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { wrapper, container, logo, slogan } from './styles.module.scss'

export const Logo = ({ image }) => {
  if (!image) {
    return null
  }

  return (
    <section className={wrapper}>
      <div className="container content">
        <div className={container}>
          <Link to="/" className={logo}>
            <Img fluid={image.childImageSharp.fluid} />
          </Link>
          <div className={slogan}>
            <strong>Finde dein inneres Core.</strong> Mit Pascale Professional
            Hairdresser
          </div>
        </div>
      </div>
    </section>
  )
}
