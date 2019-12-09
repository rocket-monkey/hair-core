import React from 'react'
import PropTypes from 'prop-types'
import { ProductPostTemplate } from '../../templates/product-post'

const ProductPostPreview = ({ entry, widgetFor }) => (
  <ProductPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    image={entry.getIn(['data', 'image'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ProductPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProductPostPreview
