import React from 'react'
import PropTypes from 'prop-types'
import { ProductsPageTemplate } from '../../templates/products-page'

const ProductsPagePreview = ({ entry, widgetFor }) => (
  <ProductsPageTemplate
    title={entry.getIn(['data', 'title'])}
    hero={entry.getIn(['data', 'image'])}
    content={widgetFor('body')}
  />
)

ProductsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProductsPagePreview
