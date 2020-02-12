import React from 'react'
import Img from 'gatsby-image'
import { Carousel } from 'react-responsive-carousel'

export const Gallery = ({ images }) => {
  return (
    <div>
      <Carousel showThumbs={false} autoPlay>
        {images
          .filter(data => !!data.Image)
          .map(data => {
            const { Image } = data
            return (
              <div>
                <Img fluid={Image.childImageSharp.fluid} />
              </div>
            )
          })}
      </Carousel>
    </div>
  )
}
