import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import BodyClassName from 'react-body-classname'
import {
  nav,
  content,
  list,
  item,
  active,
  navActive,
} from './styles.module.scss'

const Menu = class extends React.Component {
  render() {
    return (
      <>
        <BodyClassName
          className={classNames({
            [navActive]: this.props.active,
          })}
        >
          <div className={nav} onClick={this.handleClick}>
            <div className={content}>
              <ul className={list}>
                <li
                  className={classNames(item, {
                    [active]: this.isActive('/'),
                  })}
                >
                  <Link
                    to="/"
                    className="hover-target"
                    style={{ color: '#d46625' }}
                  >
                    home
                  </Link>
                </li>
                <li
                  className={classNames(item, {
                    [active]: this.isActive('/products'),
                  })}
                >
                  <Link
                    to="/products"
                    className="hover-target"
                    style={{ color: '#d8ca24' }}
                  >
                    produkte
                  </Link>
                </li>
                <li
                  className={classNames(item, {
                    [active]: this.isActive('/prices'),
                  })}
                >
                  <Link
                    to="/prices"
                    className="hover-target"
                    style={{ color: '#54a029' }}
                  >
                    preise
                  </Link>
                </li>
                <li
                  className={classNames(item, {
                    [active]: this.isActive('/appointment'),
                  })}
                >
                  <Link
                    to="/appointment"
                    className="hover-target"
                    style={{ color: '#524a8e' }}
                  >
                    termine
                  </Link>
                </li>
                <li
                  className={classNames(item, {
                    [active]: this.isActive('/about'),
                  })}
                >
                  <Link
                    to="/about"
                    className="hover-target"
                    style={{ color: '#14939e' }}
                  >
                    über mich
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
