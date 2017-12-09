import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../../../modules/filter'


@connect((state) => ({
  filterValue: state.filter.filterValue,
}), { setFilter })
class FilterComponent extends React.Component {

  static propTypes = {}

  static defaultProps = {}

  handleChange = (event) => {
    const { setFilter } = this.props
    setFilter(event.target.value)
  }

  render() {
    const { filterValue } = this.props
    
    return (
      <div className="row">
        <div className="input-field col s6">
          <input
            id="name"
            type="text"
            className="validate"
            onChange={this.handleChange}
            value={filterValue}
          />
          <label className="active" htmlFor="name">Filter user</label>
        </div>
      </div>
    )
  }

}

export default FilterComponent
