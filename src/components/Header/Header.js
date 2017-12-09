import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'


export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">React perfomance</Link>
        </div>
      </nav>
    )
  }
}
