import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.scss'

import TwoColumnsLayout from '../layouts/TwoColumns/TwoColumnsLayout'


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <TwoColumnsLayout />
      </BrowserRouter>
    );
  }
}

export default connect(null, {})(App)
