import React from 'react'
import PropTypes from 'prop-types'
import { TestimonialPostTemplate } from '../../templates/testimonial-post'

const TestimonialPostPreview = ({ entry, widgetFor }) => (
  <TestimonialPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    image={entry.getIn(['data', 'image'])}
    title={entry.getIn(['data', 'title'])}
  />
)

TestimonialPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TestimonialPostPreview
