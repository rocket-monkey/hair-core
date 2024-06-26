import React from 'react'
import classNames from 'classnames'
import IconFacebook from '../icons/Facebook'
import IconInstagram from '../icons/Instagram'
import { footer, socialMedia, link, fb } from './styles.module.scss'

const Footer = ({ data }) => {
  return (
    <section className={classNames('section', footer)}>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            {/* <div className={styles.logo}>
              <JurLogoFont />
            </div> */}
            Haircore
            <br />
            <span>Schaffhauserstrasse 8</span>
            <br />
            <span>8006 Zürich (CH)</span>
            <br />
            <br />
            <span>078 847 30 61</span>
            <br />
            <br />
            <span>
              Ab Zürich Hauptbahnhof Tram 14 oder 11 bis Haltestelle
              Kronenstrasse (nähe Schaffhauserplatz).
            </span>
            <div className={socialMedia}>
              <a
                title="Like me on facebook!"
                href="https://www.facebook.com/Haircore-457710921636344"
                rel="noopener noreferrer"
                target="_blank"
                className={classNames(link, fb)}
              >
                <IconFacebook />
              </a>
              <a
                title="Follow me on instagram!"
                href="https://www.instagram.com/haircore_pascale_fuchs/?hl=de"
                rel="noopener noreferrer"
                target="_blank"
                className={classNames(link, fb)}
              >
                <IconInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
