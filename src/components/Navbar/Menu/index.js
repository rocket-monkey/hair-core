import React from 'react'
import { Link } from 'gatsby'
import classNames from 'class-names'
import BodyClassName from 'react-body-classname'
import styles from './styles.module.scss'

const Menu = class extends React.Component {
  render() {
    return (
      <>
        <BodyClassName
          className={classNames({
            [styles.navActive]: this.props.active,
          })}
        >
          <div className={styles.nav} onClick={this.handleClick}>
            <div className={styles.content}>
              <ul className={styles.list}>
                <li
                  className={classNames(styles.item, {
                    [styles.active]: this.isActive('/'),
                  })}
                >
                  <Link to="/" className="hover-target">
                    home
                  </Link>
                </li>
                <li
                  className={classNames(styles.item, {
                    [styles.active]: this.isActive('/products'),
                  })}
                >
                  <Link to="/products" className="hover-target">
                    produkte
                  </Link>
                </li>
                <li
                  className={classNames(styles.item, {
                    [styles.active]: this.isActive('/prices'),
                  })}
                >
                  <Link to="/prices" className="hover-target">
                    preise
                  </Link>
                </li>
                <li
                  className={classNames(styles.item, {
                    [styles.active]: this.isActive('/appointment'),
                  })}
                >
                  <Link to="/appointment" className="hover-target">
                    termine
                  </Link>
                </li>
                <li
                  className={classNames(styles.item, {
                    [styles.active]: this.isActive('/contact'),
                  })}
                >
                  <Link to="/contact" className="hover-target">
                    kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </BodyClassName>
      </>
    )
  }

  isActive = type => {
    return this.props.location.pathname === type
  }

  handleClick = () => {
    setTimeout(() => {
      this.props.setNavbarState({ burgerActive: false })
    }, 150)
  }
}

export default Menu
