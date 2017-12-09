import React from 'react'
import PropTypes from 'prop-types'

import './Hoc.scss'

import DropDown from '../../components/DropDown/DropDown'


class Hoc extends React.Component {

  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <DropDown />
      </div>
    )
  }

}

export default Hoc
