import React from 'react'
import Img from 'gatsby-image'
import { Carousel } from 'react-responsive-carousel'

export const Gallery = ({ images }) => {
  return (
    <div>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {images
          .filter(data => !!data.Image)
          .map((data, index) => {
            const { Image } = data
            return (
              <div key={`gallery-entry-${index}`}>
                <Img fluid={Image.childImageSharp.fluid} />
              </div>
            )
          })}
      </Carousel>
    </div>
  )
}
