import React from 'react'
import { myHolidays } from './styles.module.scss'
import moment from 'moment'

export const Holidays = ({ holidays }) => {
  if (!holidays.edges.length) {
    return null
  }

  const now = new Date()
  const futureHolidays = holidays.edges.filter(h => {
    const { from, to } = h.node.frontmatter
    const fromDate = moment(from, 'DD.MM.YYYY')
    return moment(now).isBefore(fromDate)
  })

  const currentHoliday = holidays.edges.find(h => {
    const { from, to } = h.node.frontmatter
    const fromDate = moment(from, 'DD.MM.YYYY')
    const toDate = moment(to, 'DD.MM.YYYY')
    const hasBegun = moment(now).isAfter(fromDate)
    const notEnded = moment(now).isBefore(toDate)
    return hasBegun && notEnded
  })

  if (currentHoliday) {
    return (
      <div className={myHolidays}>
        <h3>🚨 Im Urlaub!</h3>
        ...noch bis <strong>{currentHoliday.node.frontmatter.to}</strong>
      </div>
    )
  }

  return (
    <div className={myHolidays}>
      <h3>🌴 Zukünftige Ferien</h3>
      {futureHolidays.map((h, idx) => {
        const { from, to } = h.node.frontmatter
        return (
          <div key={idx}>
            von <strong>{from}</strong> bis <strong>{to}</strong>
          </div>
        )
      })}
    </div>
  )
}
