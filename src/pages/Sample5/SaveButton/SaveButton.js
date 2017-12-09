import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { saveDate } from '../../../modules/date'


@connect((state) => ({
  date: state.date.date,
}), { saveDate })
class SaveButton extends React.Component {

  static propTypes = {
    saveDate: PropTypes.func,
    date: PropTypes.string,
  }

  static defaultProps = {}

  render() {
    const { date, saveDate } = this.props

    return (
      <div className="row">
        <div className="input-field col s6">
          <button className="waves-effect waves-light btn" onClick={saveDate}>Save date {date}</button>
        </div>
      </div>
    )
  }

}

export default SaveButton
