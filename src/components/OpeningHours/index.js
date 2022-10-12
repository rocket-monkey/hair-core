import React from 'react'
import { hoursEntry } from './styles.module.scss'

const Entry = ({ title, hours }) => {
  return (
    <div className={hoursEntry}>
      <span>{title}</span>
      <strong>{hours}</strong>
    </div>
  )
}

export const OpeningHours = ({ openingHours, layout = 'big' }) => {
  const monday = openingHours.edges.find(
    e => e.node.frontmatter.title === 'Montag'
  )
  const tuesday = openingHours.edges.find(
    e => e.node.frontmatter.title === 'Dienstag'
  )
  const wednesday = openingHours.edges.find(
    e => e.node.frontmatter.title === 'Mittwoch'
  )
  const thursday = openingHours.edges.find(
    e => e.node.frontmatter.title === 'Donnerstag'
  )
  const friday = openingHours.edges.find(
    e => e.node.frontmatter.title === 'Freitag'
  )
  const saturday = openingHours.edges.find(
    e => e.node.frontmatter.title === 'Samstag'
  )

  return (
    <div>
      <h3>Öffnungszeiten</h3>
      {monday && <Entry {...monday.node.frontmatter} />}
      {tuesday && <Entry {...tuesday.node.frontmatter} />}
      {wednesday && <Entry {...wednesday.node.frontmatter} />}
      {thursday && <Entry {...thursday.node.frontmatter} />}
      {friday && <Entry {...friday.node.frontmatter} />}
      {saturday && <Entry {...saturday.node.frontmatter} />}
    </div>
  )
}
