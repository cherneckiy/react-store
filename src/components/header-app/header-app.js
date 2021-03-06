import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import * as PropTypes from 'prop-types'
import logo from './logo.svg'

const HeaderApp = ({ total }) => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} alt='logo' style={{ white: 70, height: 70 }} />
          </Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse'
            data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'
            aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <NavLink className='nav-link' activeClassName='active' to='/' exact>Home</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' activeClassName='active' to='/cart'>Carts</NavLink>
              </li>
            </ul>
            <Link to='/cart'>
              <i className='fas fa-shopping-cart mr-1' /> Total: {total}$
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

HeaderApp.propTypes = {
  total: PropTypes.number
}

const mapStateToProps = ({ cart: { total } }) => {
  return { total }
}
export default connect(mapStateToProps)(HeaderApp)
