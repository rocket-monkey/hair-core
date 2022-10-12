import React from 'react'
import { wrapper } from './styles.module.scss'

export const InfoText = ({ info }) => {
  if (!info || !info.frontmatter.active) {
    return null
  }

  return (
    <div className={wrapper}>
      <h3>{info.frontmatter.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: info.html }} />
    </div>
  )
}
