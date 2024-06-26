import React from 'react'
import classNames from 'classnames'
import { Logo } from '../../components/Logo'
import Menu from './Menu'

const Navbar = class extends React.Component {
  state = {
    burgerActive: false,
  }

  render() {
    const { burgerActive } = this.state
    return (
      <>
        <Logo />

        <div
          className={classNames('navbar-burger', 'burger', {
            'is-active': burgerActive,
          })}
          onClick={this.handleBurgerClick}
        >
          <span />
          <span />
          <span />
        </div>

        <Menu
          active={burgerActive}
          location={this.props.location}
          setNavbarState={this.setState.bind(this)}
        />
      </>
    )
  }

  handleBurgerClick = () => {
    this.setState({ burgerActive: !this.state.burgerActive })
  }
}

export default Navbar
