import React from 'react'
import PropTypes from 'prop-types'
import { PricesPageTemplate } from '../../templates/prices-page'

const PricesPagePreview = ({ entry, widgetFor }) => (
  <PricesPageTemplate
    title={entry.getIn(['data', 'title'])}
    hero={entry.getIn(['data', 'image'])}
    content={widgetFor('body')}
  />
)

PricesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PricesPagePreview
