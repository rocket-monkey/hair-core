import React from 'react'
import PropTypes from 'prop-types'
import { AppointmentPageTemplate } from '../../templates/appointment-page'

const AppointmentPagePreview = ({ entry, widgetFor }) => (
  <AppointmentPageTemplate
    title={entry.getIn(['data', 'title'])}
    hero={entry.getIn(['data', 'image'])}
    content={widgetFor('body')}
  />
)

AppointmentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AppointmentPagePreview
